import { createElement } from '../../helper/create-element';
import { PageElement } from '../page-element';
import { generate } from './main.html';

export class Main extends PageElement {
  constructor(...children: Array<PageElement | string>) {
    const actualChildren = children.map((c) =>
      c instanceof PageElement ? c : new PageElement(createElement(c))
    );
    super(createElement(generate()), actualChildren);
    actualChildren.forEach((c) => this.attachElement(c));
  }
}
