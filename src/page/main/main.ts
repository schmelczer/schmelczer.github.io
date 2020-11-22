import { PageElement } from '../page-element';
import { generate } from './main.html';
import { createElement } from '../../helper/create-element';

export class Main extends PageElement {
  constructor(...children: Array<PageElement>) {
    super(createElement(generate()), children);
    children.forEach(c => this.attachElement(c));
  }
}
