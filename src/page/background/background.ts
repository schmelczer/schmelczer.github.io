import { PageElement } from "../../framework/page-element";
import { createElement } from "../../framework/element-factory";
import { generate } from "./background.html";

export class PageBackground extends PageElement {
  public constructor(
    private speed: number,
    count: number,
    width: number,
    probability: number,
    color: string
  ) {
    super();
    this.setElement(createElement(generate(count, probability, width, color)));
  }

  public onAfterLoad(parent: HTMLElement) {
    window.addEventListener("scroll", () => {
      this.getElement().style.transform = `translateY(-${window.scrollY *
        this.speed}px)`;
    });
    super.onAfterLoad(parent);
  }
}
