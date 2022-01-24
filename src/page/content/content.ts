import { createElement } from '../../helper/create-element';

import { generate } from './content.html';
import { PageElement } from '../page-element';

export class PageContent extends PageElement {
  public constructor(content: Array<string>) {
    super(createElement(generate()));
    content.map((t) => {
      const p = createElement(`<p>${t}</p>`);
      this.htmlRoot.appendChild(p);
    });
  }
}
