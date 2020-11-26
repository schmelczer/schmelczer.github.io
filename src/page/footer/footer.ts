import { PageElement } from '../page-element';
import { generate } from './footer.html';
import { createElement } from '../../helper/create-element';
import { url } from '../../types/url';

export interface FooterParameters {
  title: string;
  email: string;
  curriculaVitae: Array<{
    name: string;
    url: url;
  }>;
  lastEditText: string;
  lastEdit: Date;
}

export class PageFooter extends PageElement {
  constructor(footer: FooterParameters) {
    super(createElement(generate(footer)));
  }
}
