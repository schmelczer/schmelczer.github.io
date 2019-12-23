import { PageContent } from "../content/content";
import { Header } from "../../../model/portfolio";
import { PageElement } from "../../../framework/page-element";
import { createElement } from "../../../framework/element-factory";

import { generate } from "./about.html";

export class PageHeader extends PageElement {
  public constructor(header: Header, aPictureOf: string) {
    const root = createElement(generate(header, aPictureOf));
    const content = new PageContent(header.about);

    root.appendChild(content.getElement());
    super([content]);
    this.setElement(root);
  }
}
