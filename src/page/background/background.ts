import { PageElement } from "../../framework/page-element";
import {
  getHeight,
  createElement,
  randomFactory,
  sum
} from "../../framework/helper";
import { PageEvent, PageEventType } from "../../framework/page-event";
import { Blob } from "./blob";
import { generate } from "./background.html";

export class PageBackground extends PageElement {
  private blobs: Array<Blob> = [];
  private blobSpacing = 350;
  private previousWidth: number;
  private previousHeight: number;

  public constructor(private start: PageElement, private end: PageElement) {
    super();
    this.setElement(createElement(generate()));
    Blob.initialize(10, 30, 5);
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

    this.getElement().style.width = `${width}px`;
    this.getElement().style.height = `${height}px`;

    const requiredBlobCount = Math.round(
      (width * height) / this.blobSpacing ** 2
    );

    while (requiredBlobCount > this.blobs.length) {
      const blob = new Blob();
      this.getElement().appendChild(blob.htmlElement);
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
