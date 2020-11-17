import { createElement } from '../../helper/create-element';
import { Content } from '../../types/portfolio';
import { generate } from './content.html';
import { PageElement } from '../page-element';

export class PageContent extends PageElement {
  public constructor(content: Content) {
    super(createElement(generate()));
    content.forEach(c => this.attachElement(c));
  }
}
