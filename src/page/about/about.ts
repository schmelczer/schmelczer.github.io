import { PageContent } from '../content/content';
import { Header } from '../../model/portfolio';
import { PageElement } from '../../framework/page-element';

import { generate } from './about.html';
import { createElement } from '../../framework/helper/create-element';

export class PageHeader extends PageElement {
  public constructor(header: Header) {
    const root = createElement(generate(header));
    const content = new PageContent(header.about);

    super([content]);
    this.setElement(root);
    root.appendChild(content.getElement());
  }
}
