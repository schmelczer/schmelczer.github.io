import { PageContent } from "../content/content";
import { Header } from "../../model/portfolio";
import "./about.scss";
import { PageElement } from "../../framework/page-element";
import { createElement } from "../../framework/element-factory";

export class PageHeader extends PageElement {
  public constructor({ name, picture, about }: Header, aPictureOf: string) {
    const root = createElement(`
        <section id="about">
            <header>
                <img alt="${aPictureOf} ${name}" src="${picture}"/>
                <h1>${name}</h1>
            </header>
        </section>
  `);
    const content = new PageContent(about);
    root.appendChild(content.getElement());
    super([content]);
    this.setElement(root);
  }
}
