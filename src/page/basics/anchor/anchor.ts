import { PageElement } from '../../page-element';
import { createElement } from '../../../helper/create-element';
import { generate } from './anchor.html';
import { url } from '../../../types/url';

export class Anchor extends PageElement {
  public constructor(href: url, text: string) {
    super(createElement(generate({ href, text })));
  }
}
