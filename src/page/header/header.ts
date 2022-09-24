import { createElement } from '../../helper/create-element';
import { ResponsiveImage } from '../../types/responsive-image';
import { Image } from '../image-viewer/image/image.html';
import { PageElement } from '../page-element';
import { generate } from './header.html';
import { PageThemeSwitcher } from './theme-switcher/theme-switcher';

export class PageHeader extends PageElement {
  public constructor({
    name,
    image,
    imageAltText,
    about,
  }: {
    name: string;
    image: ResponsiveImage;
    imageAltText: string;
    about: Array<string>;
  }) {
    super(
      createElement(
        generate({
          name,
          about,
          photo: Image({
            image,
            alt: imageAltText,
            imageScreenRatio: 0.2,
          }),
        })
      )
    );
    this.attachElement(new PageThemeSwitcher());
  }
}
