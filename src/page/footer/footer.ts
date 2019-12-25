import { Footer } from "../../model/portfolio";
import { PageElement } from "../../framework/page-element";

import { generate } from "./footer.html";
import { createElement } from "../../framework/helper";

export class PageFooter extends PageElement {
  constructor(footer: Footer, cvName: string) {
    super();
    this.setElement(createElement(generate(footer, cvName)));
  }
}
