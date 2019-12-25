import { PageElement } from "../../framework/page-element";
import { generate } from "./background.html";
import { createElement } from "../../framework/helper";
import { PageEvent, PageEventType } from "../../framework/page-event";

export class PageBackground extends PageElement {
  public constructor(
    private speed: number,
    count: number,
    width: number,
    probability: number,
    color: string,
    translateZ: number
  ) {
    super();
    this.setElement(
      createElement(generate(count, probability, width, color, translateZ))
    );
  }

  protected handleEvent(event: PageEvent, parent: PageElement) {
    if (event.type === PageEventType.onLoad) {
      window.addEventListener("resize", this.resize.bind(this, parent));
      this.resize(parent);
    } else if (event.type === PageEventType.onBodyDimensionsChanged) {
      this.resize(parent);
    }
  }

  private resize(parent: PageElement) {
    const width = parent.getElement().clientWidth;
    const height = parent.getElement().clientHeight;
  }
}
