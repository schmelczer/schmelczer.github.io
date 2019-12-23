import { PageElement } from "../../framework/page-element";
import { createElement } from "../../framework/element-factory";
import { generate } from "./background.html";

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
}
