import { PageElement } from '../../framework/page-element';
import { createElement } from '../../framework/helper/create-element';
import { Content } from '../../model/portfolio';
import { generate } from './content.html';

export class PageContent extends PageElement {
  public constructor(content: Content) {
    super(createElement(generate(content)));
  }
}
