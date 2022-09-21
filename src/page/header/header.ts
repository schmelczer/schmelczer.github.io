import { createElement } from '../../helper/create-element';
import { Image } from '../basics/image/image';
import { PageContent } from '../content/content';
import { PageElement } from '../page-element';
import { PageThemeSwitcher } from '../theme-switcher/theme-switcher';
import { generate } from './header.html';

export class PageHeader extends PageElement {
  public constructor(header: { name: string; photo: Image; about: Array<string> }) {
    super(createElement(generate(header.name)));

    this.attachElementByReplacing('.picture', header.photo);
    this.attachElement(new PageContent(header.about));
    this.attachElement(new PageThemeSwitcher());
  }
}
