import { PageContent } from '../content/content';
import { Header } from '../../types/portfolio';
import { generate } from './header.html';
import { createElement } from '../../helper/create-element';
import { PageThemeSwitcher } from '../theme-switcher/theme-switcher';
import { PageElement } from '../page-element';

export class PageHeader extends PageElement {
  public constructor(header: Header) {
    super(createElement(generate(header)));
    this.attachElementByReplacing('.picture', header.picture);
    this.attachElement(new PageContent(header.about));
    this.attachElement(new PageThemeSwitcher());
  }
}
