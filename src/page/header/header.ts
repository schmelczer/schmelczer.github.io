import { createElement } from '../../helper/create-element';
import { html } from '../../types/html';
import { PageElement } from '../page-element';
import { generate } from './header.html';
import { PageThemeSwitcher } from './theme-switcher/theme-switcher';

export class PageHeader extends PageElement {
  public constructor({
    name,
    photo,
    about,
  }: {
    name: string;
    photo: html;
    about: Array<string>;
  }) {
    super(createElement(generate({ name, about, photo })));
    this.attachElement(new PageThemeSwitcher());
  }
}
