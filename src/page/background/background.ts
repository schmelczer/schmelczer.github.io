import { PageElement } from '../../framework/page-element';
import { Blob } from './blob';
import { generate } from './background.html';
import { Animation } from './animation';
import { Vec3 } from './vec3';
import { Vec2 } from './vec2';
import { PageEvent, PageEventType } from '../../framework/events/page-event';
import { createElement } from '../../framework/helper/create-element';
import { sum } from '../../framework/helper/sum';
import { getHeight } from '../../framework/helper/get-height';

export class PageBackground extends PageElement {
  private readonly blobs: Array<Blob> = [];
  private readonly blobSpacing = 325;
  private readonly minBlobCount = 30;
  private readonly perspective = 5;
  private readonly zMin = 10;
  private readonly zMax = 30;
  private readonly animationTime = 250;
  private backgroundSize: Animation<Vec2>;
  private scrollPosition: number = 0;
  private previousTimestamp: DOMHighResTimeStamp = null;
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;

  public constructor(
    private readonly start: PageElement,
    private readonly inBetween: Array<PageElement>,
    private readonly end: PageElement
  ) {
    super(createElement(generate()));
    this.canvas = this.element as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');
    Blob.initialize(this.zMin, this.zMax);
  }

  protected handleEvent(event: PageEvent, parent: PageElement) {
    switch (event.type) {
      case PageEventType.onLoad:
        this.bindListeners(parent);
        break;
      case PageEventType.onBodyDimensionsChanged:
        this.resize(parent, event.data?.deltaHeight);
        break;
      case PageEventType.pageThemeChanged:
        Blob.changeTheme(event.data);
        this.blobs.forEach(b => b.decideColor());
        break;
    }
  }

  private bindListeners(parent: PageElement) {
    window.addEventListener('resize', () => this.resize(parent));
    window.addEventListener('load', e => {
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
    const targetWidth = parent.element.clientWidth;

    const siblings: Array<HTMLElement> = this.getSiblings();
    let targetHeight = sum(siblings.map(getHeight));
    if (heightChange) {
      targetHeight += heightChange;
    }

    const targetSize = new Vec2(targetWidth, targetHeight);

    this.backgroundSize = new Animation(
      this.backgroundSize ? this.backgroundSize.value : targetSize,
      targetSize,
      this.animationTime,
      (from: Vec2, to: Vec2, q: number): Vec2 =>
        new Vec2(from.x + q * (to.x - from.x), from.y + q * (to.y - from.y)),
      backgroundSize =>
        this.blobs.forEach(blob => {
          const variableOffset = (offset, q) =>
            Math.max(
              0,
              offset -
                ((blob.z - this.zMin) / (this.zMax - this.zMin)) * offset * q
            );
          const topOffset = variableOffset(getHeight(this.start.element), 1);
          const topLeft = this.convertFrom2Dto3D(
            new Vec2(0, topOffset),
            blob.z
          );

          const bottomOffset = variableOffset(getHeight(this.end.element), 0.2);

          const bottomRight = this.convertFrom2Dto3D(
            new Vec2(this.canvas.width, this.canvas.height - bottomOffset),
            blob.z,
            backgroundSize.y - this.canvas.height
          );

          blob.positionOffset = topLeft;
          blob.positionScale = bottomRight.subtract(topLeft);
        })
    );
  }

  private getSiblings(): Array<HTMLElement> {
    return [this.start, ...this.inBetween, this.end].map(e => e.element);
  }

  private redraw(timestamp: DOMHighResTimeStamp, parent: PageElement) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const deltaTime = this.getDeltaTime(timestamp);
    this.backgroundSize.step(deltaTime);
    this.blobs.forEach(b => b.step(deltaTime));

    this.scrollPosition = parent.element.scrollTop;
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

      if (this.isInView(topLeft, bottomRight)) {
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

  private isInView(topLeft: Vec2, bottomRight: Vec2): boolean {
    return (
      ((0 <= topLeft.x && topLeft.x <= this.canvas.width) ||
        (0 <= bottomRight.x && bottomRight.x < this.canvas.width)) &&
      ((0 <= topLeft.y && topLeft.y <= this.canvas.height) ||
        (0 <= bottomRight.y && bottomRight.y <= this.canvas.height))
    );
  }

  private get requiredBlobCount(): number {
    return Math.max(
      this.minBlobCount,
      Math.round(
        (this.backgroundSize.value.x * this.backgroundSize.value.y) /
          this.blobSpacing ** 2
      )
    );
  }
}
