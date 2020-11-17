import { PageElement } from '../../page-element';
import { createElement } from '../../../helper/create-element';
import { generate } from './text.html';

export class Text extends PageElement {
  public constructor(text: string) {
    super(createElement(generate(text)));
  }
}
