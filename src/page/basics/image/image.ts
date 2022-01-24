import { PageElement } from '../../page-element';
import { createElement } from '../../../helper/create-element';
import { generate } from './image.html';
import { last } from '../../../helper/last';
import { ResponsiveImage } from '../../../types/responsive-image';

export class Image extends PageElement {
  private static readonly imageScreenRatio = 0.8;

  public constructor(
    imageWebP: ResponsiveImage,
    imageJpeg: ResponsiveImage,
    alt: string,
    container = true
  ) {
    super(
      createElement(
        generate({
          imageWebP,
          imageJpeg,
          alt,
          container,
          sizes: Image.getSizes(imageWebP),
        })
      )
    );
  }

  private static getSizes(image: ResponsiveImage): string {
    return (
      image.images
        .slice(0, -1)
        .map((d) => `(max-width: ${d.width / Image.imageScreenRatio}px) ${d.width}px,`)
        .join('\n') + `\n${last(image.images)!.width}px`
    );
  }
}
