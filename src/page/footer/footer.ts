import { Footer } from '../../model/portfolio';
import { PageElement } from '../../framework/page-element';

import { generate } from './footer.html';
import { createElement } from '../../framework/helper/create-element';

export class PageFooter extends PageElement {
  constructor(footer: Footer) {
    super(createElement(generate(footer)));
  }
}
