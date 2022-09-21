import { last } from '../../../helper/last';
import { html } from '../../../types/html';
import { ResponsiveImage } from '../../../types/responsive-image';
import './image.scss';

export const generate = ({
  sizes,
  imageWebP,
  imageJpeg,
  alt,
  container,
}: {
  sizes: string;
  imageWebP: ResponsiveImage;
  imageJpeg: ResponsiveImage;
  alt: string;
  container: boolean;
}): html => `
  ${
    container
      ? `<div class="figure-container" style="padding-top:${
          (imageJpeg.height / imageJpeg.width) * 100
        }%">`
      : ''
  }
  <picture loading="lazy">
    <source
      srcset="${imageWebP.srcSet}" 
      sizes="${sizes}"
      width="${imageWebP.width}"
      height="${imageWebP.height}"
      type="image/webp"
      alt="${alt}"
    />
    <source
      srcset="${imageJpeg.srcSet}" 
      sizes="${sizes}"
      width="${imageJpeg.width}"
      height="${imageJpeg.height}"
      type="image/jpeg"
      alt="${alt}"
    />
    <img
    tabindex="0"
      loading="lazy"
      srcset="${imageJpeg.srcSet}" 
      sizes="${sizes}"
      width="${imageJpeg.width}"
      height="${imageJpeg.height}"
      src="${last(imageJpeg.images)?.path}" 
      alt="${alt}"
    />
  </picture>
  ${container ? `</div>` : ''}
`;
