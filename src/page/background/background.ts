import { PageElement } from "../../framework/page-element";
import { getHeight, createElement, sum } from "../../framework/helper";
import { PageEvent, PageEventType } from "../../framework/page-event";
import { Blob } from "./blob";
import { generate } from "./background.html";
import { Animation } from "./animation";
import { Vec3 } from "./vec3";
import { Vec2 } from "./vec2";

export class PageBackground extends PageElement {
  private readonly blobs: Array<Blob> = [];
  private readonly blobSpacing = 140;
  private readonly perspective = 5;
  private readonly zMin = 10;
  private readonly zMax = 30;
  private readonly animationTime = 350;
  private backgroundSize: Animation;
  private scrollPosition: number = 0;
  private previousTimestamp: DOMHighResTimeStamp = null;
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;

  public constructor(private start: PageElement, private end: PageElement) {
    super();
    this.canvas = createElement(generate()) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d");
    this.setElement(this.canvas);
    Blob.initialize(this.zMin, this.zMax);
  }

  protected handleEvent(event: PageEvent, parent: PageElement) {
    if (event.type === PageEventType.onLoad) {
      this.bindListeners(parent);
    } else if (event.type === PageEventType.onBodyDimensionsChanged) {
      this.resize(parent, event.data?.deltaHeight);
    }
  }

  private bindListeners(parent: PageElement) {
    window.addEventListener("resize", () => this.resize(parent));
    window.addEventListener("load", e => {
      this.resize(parent);
      this.redraw(e.timeStamp, parent);
    });
  }

  private resize(parent: PageElement, heightChange?: number) {
    this.resizeCanvas();
    this.resizeBackground(parent, heightChange);
  }

  private resizeCanvas() {
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
  }

  private resizeBackground(parent: PageElement, heightChange?: number) {
    const targetWidth = parent.getElement().clientWidth;

    const siblings: Array<HTMLElement> = this.getSiblings(parent);
    let targetHeight = sum(siblings.map(getHeight));
    if (heightChange) {
      targetHeight += heightChange;
    }

    const targetSize = new Vec2(targetWidth, targetHeight);

    this.backgroundSize = new Animation(
      this.backgroundSize ? this.backgroundSize.value : targetSize,
      targetSize,
      this.animationTime,
      backgroundSize =>
        this.blobs.forEach(blob => {
          const topLeft = this.convertFrom2Dto3D(Vec2.Zero, blob.z);
          const bottomRight = this.convertFrom2Dto3D(
            backgroundSize,
            blob.z,
            backgroundSize.y - this.canvas.height
          );
          blob.positionScale = bottomRight.subtract(topLeft);
        })
    );
  }

  private getSiblings(parent: PageElement): Array<HTMLElement> {
    return Array.prototype.slice
      .call(parent.getElement().children)
      .filter(e => e !== this.getElement());
  }

  private redraw(timestamp: DOMHighResTimeStamp, parent: PageElement) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const deltaTime = this.getDeltaTime(timestamp);
    this.backgroundSize.step(deltaTime);
    this.scrollPosition = parent.getElement().scrollTop;
    const requiredBlobCount = this.requiredBlobCount;

    while (requiredBlobCount > this.blobs.length) {
      this.blobs.push(new Blob());
    }

    this.blobs.sort((b1, b2) => b2.z - b1.z);

    this.blobs.forEach((blob, i) => {
      if (i >= requiredBlobCount) {
        return;
      }

      const topLeft = this.convertFrom3Dto2D(blob.topLeft);
      const bottomRight = this.convertFrom3Dto2D(
        blob.topLeft.add(Vec3.from(blob.size, 0))
      );

      if (this.isInView(topLeft) || this.isInView(bottomRight)) {
        blob.draw(this.ctx, topLeft, bottomRight.subtract(topLeft));
      }
    });

    window.requestAnimationFrame(timestamp => this.redraw(timestamp, parent));
  }

  private getDeltaTime(timestamp: DOMHighResTimeStamp): number {
    const deltaTime = this.previousTimestamp
      ? timestamp - this.previousTimestamp
      : 0;
    this.previousTimestamp = timestamp;
    return Math.max(0, deltaTime);
  }

  private convertFrom3Dto2D(p: Vec3): Vec2 {
    const m = this.perspective / (this.perspective + p.z);
    return new Vec2(
      m * (p.z / 2 + p.x),
      m * (p.z / 2 + p.y - this.scrollPosition)
    );
  }

  private convertFrom2Dto3D(
    p: Vec2,
    z: number,
    scrollPosition: number = 0
  ): Vec2 {
    const m = 1 + z / this.perspective;
    return new Vec2(p.x * m - z / 2, p.y * m - z / 2 + scrollPosition);
  }

  private isInView(p: Vec2): boolean {
    return (
      0 <= p.x &&
      p.x <= this.canvas.width &&
      0 <= p.y &&
      p.y <= this.canvas.height
    );
  }

  private get requiredBlobCount(): number {
    return Math.round(
      (this.backgroundSize.value.x * this.backgroundSize.value.y) /
        this.blobSpacing ** 2
    );
  }
}
