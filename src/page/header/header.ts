import { ResponsiveImage } from '../../types/responsive-image';
import { BorderedImage } from '../figure/bordered-image/bordered-image';
import { ImageViewer } from '../image-viewer/image-viewer';
import { PageElement } from '../page-element';
import { generate } from './header.html';
import { ThemeSwitcher } from './theme-switcher/theme-switcher';

export class Header extends PageElement {
  public constructor({
    name,
    image,
    imageAltText,
    about,
    imageViewer,
  }: {
    name: string;
    image: ResponsiveImage;
    imageAltText: string;
    about: Array<string>;
    imageViewer?: ImageViewer;
  }) {
    super(
      generate({
        name,
        about,
      })
    );

    this.attachElementByReplacing(
      'img',
      new BorderedImage(
        {
          image,
          alt: imageAltText,
          sizes: '(max-width: 924px) 11rem, 12.5rem',
        },
        imageViewer
      )
    );
    this.attachElement(new ThemeSwitcher());
  }
}
