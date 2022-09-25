import { PageElement } from '../page-element';
import { generate } from './main.html';

export class Main extends PageElement {
  constructor(...children: Array<PageElement | string>) {
    const actualChildren = children.map((c) =>
      c instanceof PageElement ? c : new PageElement(c)
    );

    super(generate(), actualChildren);
    actualChildren.forEach((c) => this.attachElement(c));
  }
}
