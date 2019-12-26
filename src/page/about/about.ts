import { PageContent } from "../content/content";
import { Header } from "../../model/portfolio";
import { PageElement } from "../../framework/page-element";

import { generate } from "./about.html";
import { createElement } from "../../framework/helper";

export class PageHeader extends PageElement {
  public constructor(header: Header, aPictureOf: string) {
    const root = createElement(generate(header, aPictureOf));
    const content = new PageContent(header.about);

    super([content]);
    this.setElement(root);
    this.query(".container").appendChild(content.getElement());
  }
}
