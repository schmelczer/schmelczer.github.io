import { PageElement } from '../page-element';

export class Body extends PageElement {
  constructor(...children: Array<PageElement>) {
    super(document.body, children);
    children.forEach((c) => this.attachElement(c));
    this.setParent();
  }
}
