import { PageContent } from '../content/content';

import { generate } from './header.html';
import { createElement } from '../../helper/create-element';
import { PageThemeSwitcher } from '../theme-switcher/theme-switcher';
import { PageElement } from '../page-element';
import { Image } from '../basics/image/image';

export class PageHeader extends PageElement {
  public constructor(header: { name: string; photo: Image; about: Array<string> }) {
    super(createElement(generate(header.name)));

    this.attachElementByReplacing('.picture', header.photo);
    this.attachElement(new PageContent(header.about));
    this.attachElement(new PageThemeSwitcher());
  }
}
