import { PageElement } from "../../framework/page-element";
import { generate } from "./background.html";
import {
  choose,
  createElement,
  randomFactory,
  randomInInterval,
  sum
} from "../../framework/helper";
import { PageEvent, PageEventType } from "../../framework/page-event";

export class PageBackground extends PageElement {
  private colors = ["#fff9e077", "#ffd6d677"];
  private blobSize = 150; // with margin
  private perspective = 5;

  public constructor() {
    super();
    this.setElement(createElement(generate(0)));
  }

  protected handleEvent(event: PageEvent, parent: PageElement) {
    if (event.type === PageEventType.onLoad) {
      window.addEventListener("resize", this.resize.bind(this, parent));
      window.addEventListener("load", this.resize.bind(this, parent));
    } else if (event.type === PageEventType.onBodyDimensionsChanged) {
      this.resize(parent);
    }
  }

  private resize(parent: PageElement) {
    const siblings: Array<HTMLElement> = Array.prototype.slice
      .call(parent.getElement().children)
      .filter(e => e !== this.getElement());

    const width = document.body.clientWidth;

    const height = sum(
      siblings.map(c => {
        const computedStyle = window.getComputedStyle(c);
        return (
          c.clientHeight +
          parseInt(computedStyle.marginTop) +
          parseInt(computedStyle.marginBottom) +
          parseInt(computedStyle.borderTopWidth) +
          parseInt(computedStyle.borderBottomWidth)
        );
      })
    );

    const random = randomFactory(42);

    const count = Math.round((width * height) / this.blobSize ** 2);

    const randomWithKnownZ = (z: number, bound: number): number => {
      const l = (bound * (this.perspective + z)) / this.perspective;
      return randomInInterval(-(l / 2 - bound / 2), l / 2 + bound / 2, random);
    };

    this.setElement(
      createElement(
        generate(
          count,
          () => choose(this.colors, random),
          () => randomInInterval(150, 750, random),
          () => {
            const z = randomInInterval(-5, -15, random);
            return `
              translateX(${randomWithKnownZ(-z, width)}px)
              translateY(${randomWithKnownZ(-z, height)}px)
              translateZ(${z}px)
              rotate(-20deg)
            `;
          }
        )
      )
    );

    this.getElement().style.width = `${width}px`;
    this.getElement().style.height = `${height}px`;
  }
}
