import './image.scss';
import { last } from '../../../helper/last';
import { ResponsiveImage } from '../../../types/responsive-image';
import { html } from '../../../types/html';

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
  ${container ? `<div class="figure-container">` : ''}
  <picture loading="lazy">
    <source
      srcset="${imageWebP.srcSet}" 
      sizes="${sizes}"
      width="${imageWebP.width}"
      height="${imageWebP.height}"
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
