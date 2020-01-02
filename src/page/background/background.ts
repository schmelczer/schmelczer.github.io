import { PageElement } from "../../framework/page-element";
import {
  getHeight,
  createElement,
  randomFactory,
  sum,
  randomInInterval
} from "../../framework/helper";
import { PageEvent, PageEventType } from "../../framework/page-event";
import { Blob } from "./blob";
import { generate } from "./background.html";

export class PageBackground extends PageElement {
  private readonly blobs: Array<Blob> = [];
  private readonly blobSpacing = 350;
  private readonly baseDeltaTime = (1 / 30) * 1000;
  private readonly perspective = 5;
  private readonly zMin = 10;
  private readonly zMax = 30;
  private width: number;
  private height: number;
  private scrollPosition: number = 0;
  private previousTimestamp: DOMHighResTimeStamp = null;
  private readonly ctx: RenderingContext;

  public constructor(private start: PageElement, private end: PageElement) {
    super();
    const canvas = createElement(generate()) as HTMLCanvasElement;
    this.ctx = canvas.getContext("2d");
    this.setElement(canvas);
  }

  protected handleEvent(event: PageEvent, parent: PageElement) {
    if (event.type === PageEventType.onLoad) {
      this.bindListeners(parent);
      this.resize(parent);
    } else if (event.type === PageEventType.onBodyDimensionsChanged) {
      this.resize(parent, event.data?.deltaHeight);
    }
  }

  private bindListeners(parent: PageElement) {
    window.addEventListener("resize", () => this.resize(parent));
    window.addEventListener("load", () => this.resize(parent));
    window.requestAnimationFrame(timestamp =>
      this.scrollContainer(timestamp, parent)
    );
  }

  public drawBlob(blob: Blob) {
    const topLeft = this.convertFrom3Dto2D(blob.topLeft);
    const bottomRight = this.convertFrom3Dto2D(blob.bottomRight);
  }

  private convertFrom3Dto2D(point: [number, number, number]): [number, number] {
    let [x, y, z] = point;
    return [
      (z / this.perspective) * (this.width / 2 - x) + x,
      (z / this.perspective) * (this.height / 2 - y) + y - this.scrollPosition
    ];
  }

  private randomWithKnownZ(
    random: () => number,
    viewportSize: number,
    scrollSize: number,
    startOffset = 0,
    endOffset = 0
  ): number {
    const m = 1 + this.z / Blob.perspective;

    const variableOffset = (offset, q) =>
      Math.max(
        0,
        offset - ((this.z - Blob.zMin) / (Blob.zMax - Blob.zMin)) * (offset * q)
      );

    startOffset = variableOffset(startOffset, 1);
    endOffset = variableOffset(endOffset, 0.2);

    const lowerBound = viewportSize / 2 - (viewportSize / 2 - startOffset) * m;
    const l =
      scrollSize - viewportSize + (viewportSize - startOffset - endOffset) * m;

    return randomInInterval(lowerBound, lowerBound + l, random);
  }

  private scrollContainer(timestamp: DOMHighResTimeStamp, parent: PageElement) {
    /*const deltaTime = this.getDeltaTime(timestamp);
    const scrollPositionToSet = parent.getElement().scrollTop;
    const deltaScroll = scrollPositionToSet - this.previousScrollPositionToSet;
    this.previousScrollPositionToSet = scrollPositionToSet;

    const threshold = 2;
    if (deltaScroll > threshold) {
      const smoothDeltaScroll =
        (deltaScroll / deltaTime) * Math.min(deltaTime, this.baseDeltaTime);
      this.getElement().scrollTop += smoothDeltaScroll;
    } else {
      const error = scrollPositionToSet - this.getElement().scrollTop;
      if (Math.abs(error) > threshold) {
        this.getElement().scrollTop += Math.min(
          error / 4,
          this.maxBaseSpeedInPixels,
          error
        );
      }
    }

    window.requestAnimationFrame(timestamp =>
      this.scrollContainer(timestamp, parent)
    );*/
  }

  private getDeltaTime(timestamp: DOMHighResTimeStamp): number {
    const deltaTime = this.previousTimestamp
      ? timestamp - this.previousTimestamp
      : 0;
    this.previousTimestamp = timestamp;
    return deltaTime;
  }

  private resize(parent: PageElement, heightChange?: number) {
    const siblings: Array<HTMLElement> = this.getSiblings(parent);

    const width = parent.getElement().clientWidth;
    let height = sum(siblings.map(getHeight));
    if (heightChange) {
      height += heightChange;
    }

    if (this.previousHeight === height && this.previousWidth === width) {
      return;
    }
    this.previousHeight = height;
    this.previousWidth = width;

    this.query("#background").style.width = `${width}px`;
    this.query("#background").style.height = `${height}px`;

    const requiredBlobCount = Math.round(
      (width * height) / this.blobSpacing ** 2
    );

    while (requiredBlobCount > this.blobs.length) {
      const blob = new Blob();
      // this.query("#background").appendChild(blob.htmlElement);
      this.blobs.push(blob);
    }

    const random = randomFactory(2662);

    this.blobs.forEach((b, i) => {
      /*if (i >= requiredBlobCount) {
        b.hide();
      } else {
        b.transform(
          random,
          width,
          parent.getElement().clientHeight,
          height,
          getHeight(this.start.getElement()),
          getHeight(this.end.getElement())
        );
        b.show();
      }*/
    });
  }

  private getSiblings(parent: PageElement): Array<HTMLElement> {
    return Array.prototype.slice
      .call(parent.getElement().children)
      .filter(e => e !== this.getElement());
  }
}
