import { Footer } from '../../types/portfolio';
import { PageElement } from '../page-element';

import { generate } from './footer.html';
import { createElement } from '../../helper/create-element';

export class PageFooter extends PageElement {
  constructor(footer: Footer) {
    super(createElement(generate(footer)));
  }
}
