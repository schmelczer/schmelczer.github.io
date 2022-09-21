import { createElement } from '../../helper/create-element';
import { Image } from '../basics/image/image';
import { PageElement } from '../page-element';
import { PageThemeSwitcher } from '../theme-switcher/theme-switcher';
import { generate } from './header.html';

export class PageHeader extends PageElement {
  public constructor({
    name,
    photo,
    about,
  }: {
    name: string;
    photo: Image;
    about: Array<string>;
  }) {
    super(createElement(generate({ name, about })));

    this.attachElementByReplacing('.picture', photo);
    this.attachElement(new PageThemeSwitcher());
  }
}
