import { createElement } from '../../helper/create-element';
import { ResponsiveImage } from '../../types/responsive-image';
import { Image } from '../basics/image/image.html';
import { PageElement } from '../page-element';
import { generate } from './header.html';
import { PageThemeSwitcher } from './theme-switcher/theme-switcher';

export class PageHeader extends PageElement {
  public constructor({
    name,
    imageWebP,
    imageAltText,
    about,
  }: {
    name: string;
    imageWebP: ResponsiveImage;
    imageAltText: string;
    about: Array<string>;
  }) {
    super(
      createElement(
        generate({
          name,
          about,
          photo: Image({
            imageWebP,
            alt: imageAltText,
            imageScreenRatio: 0.2,
          }),
        })
      )
    );
    this.attachElement(new PageThemeSwitcher());
  }
}
