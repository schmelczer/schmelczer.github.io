import { PageElement } from "../../framework/page-element";
import { generate } from "./background.html";
import {
  choose,
  getHeight,
  createElement,
  randomFactory,
  randomInInterval,
  sum,
  mixColors
} from "../../framework/helper";
import { PageEvent, PageEventType } from "../../framework/page-event";

export class PageBackground extends PageElement {
  private colors = ["#fff9e0", "#ffd6d6"];
  private blobSpacing = 200;
  private perspective = 5;
  private currentRealHeight = 0;
  private currentRealWidth = 0;
  private currentBlobCount = 0;

  public constructor(private start: PageElement, private end: PageElement) {
    super();
    this.setElement(createElement(generate(0)));
  }

  protected handleEvent(event: PageEvent, parent: PageElement) {
    if (event.type === PageEventType.onLoad) {
      this.bindListeners(parent);
    } else if (event.type === PageEventType.onBodyDimensionsChanged) {
      this.resize(parent);
    }
  }

  private bindListeners(parent: PageElement) {
    window.addEventListener("resize", this.resize.bind(this, parent));
    window.addEventListener("load", this.resize.bind(this, parent));
  }

  private resize(parent: PageElement) {
    const siblings: Array<HTMLElement> = Array.prototype.slice
      .call(parent.getElement().children)
      .filter(e => e !== this.getElement());

    const width = parent.getElement().clientWidth;
    const height = sum(siblings.map(getHeight));

    if (height > this.currentRealHeight || width > this.currentRealWidth) {
      this.currentRealHeight = height;
      this.currentRealWidth = width;

      const random = randomFactory(46);

      const zMin = 20;
      const zMax = 40;

      const count = Math.round((width * height) / this.blobSpacing ** 2);

      const randomWithKnownZ = (
        z: number,
        viewportSize: number,
        scrollSize: number,
        startOffset = 0,
        endOffset = 0
      ): number => {
        const m = 1 + z / this.perspective;

        const variableOffset = (offset, q) =>
          offset - ((z - zMin) / (zMax - zMin)) * (offset * q);

        startOffset = variableOffset(startOffset, 0.6);
        endOffset = variableOffset(endOffset, 0.2);

        const lowerBound =
          viewportSize / 2 - (viewportSize / 2 - startOffset) * m;
        const l =
          scrollSize -
          viewportSize +
          (viewportSize - startOffset - endOffset) * m;

        return randomInInterval(lowerBound, lowerBound + l, random);
      };

      this.setElement(
        createElement(
          generate(
            count,
            () => randomInInterval(zMin, zMax, random),
            z =>
              "#" +
              mixColors(
                "#ffffff",
                choose(this.colors, random),
                (z - zMin) / (zMax - zMin)
              ),
            () => randomInInterval(160, 750, random),
            i => i >= this.currentBlobCount,
            z => `
              translateX(${randomWithKnownZ(z, width, width)}px)
              translateY(${randomWithKnownZ(
                z,
                parent.getElement().clientHeight,
                height,
                getHeight(this.start.getElement()),
                getHeight(this.end.getElement())
              )}px)
              translateZ(${-z}px)
              rotate(-20deg)
            `
          )
        )
      );

      this.currentBlobCount = count;
      console.log(count);
    }
    this.getElement().style.width = `${width}px`;
    this.getElement().style.height = `${height}px`;
  }
}
