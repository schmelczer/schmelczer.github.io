import { Footer } from "../../model/portfolio";
import { PageElement } from "../../framework/page-element";
import { createElement } from "../../framework/element-factory";

import "./footer.scss";
import { generate } from "./footer.html";

export class PageFooter extends PageElement {
  constructor(footer: Footer, cvName: string) {
    super();
    this.setElement(createElement(generate(footer, cvName)));
  }
}
