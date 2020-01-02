import { PageElement } from "../../framework/page-element";
import {
  getHeight,
  createElement,
  randomFactory,
  sum,
  isChrome
} from "../../framework/helper";
import { PageEvent, PageEventType } from "../../framework/page-event";
import { Blob } from "./blob";
import { generate } from "./background.html";

export class PageBackground extends PageElement {
  private readonly blobs: Array<Blob> = [];
  private readonly blobSpacing = 350;
  private previousWidth: number;
  private previousHeight: number;
  private previousScrollPositionToSet: number = 0;
  private previousTimestamp: DOMHighResTimeStamp = null;
  private readonly baseDeltaTime = (1 / 30) * 1000;
  private readonly maxBaseSpeedInPixels = 20;

  public constructor(private start: PageElement, private end: PageElement) {
    super();
    this.setElement(createElement(generate()));
    if (isChrome()) {
      this.query("#background").style.transformStyle = "preserve-3d";
    }
    Blob.initialize(10, 30, 5);
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
    window.addEventListener("load", () => this.resize(parent));
    window.requestAnimationFrame(timestamp =>
      this.scrollContainer(timestamp, parent)
    );
  }

  private scrollContainer(timestamp: DOMHighResTimeStamp, parent: PageElement) {
    const deltaTime = this.getDeltaTime(timestamp);
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
    );
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
      this.query("#background").appendChild(blob.htmlElement);
      this.blobs.push(blob);
    }

    const random = randomFactory(2662);

    this.blobs.forEach((b, i) => {
      if (i >= requiredBlobCount) {
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
      }
    });
  }

  private getSiblings(parent: PageElement): Array<HTMLElement> {
    return Array.prototype.slice
      .call(parent.getElement().children)
      .filter(e => e !== this.getElement());
  }
}
