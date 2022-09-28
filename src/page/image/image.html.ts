import { html } from '../../types/html';
import { ResponsiveImage } from '../../types/responsive-image';
import './image.scss';

export const Image = ({
  image,
  alt,
  sizes = null,
  isEagerLoaded = false,
}: {
  image: ResponsiveImage;
  alt: string;
  sizes?: string | null;
  isEagerLoaded?: boolean;
}): html => `
  <div
    class="image"
    style="background-size: cover; background-image: url('${
      image.placeholder
    }'); aspect-ratio: ${image.width / image.height}"
  >
    <img
      ${isEagerLoaded ? '' : 'loading="lazy"'}
      srcset="${image.srcSet}"
      ${sizes ? `sizes="${sizes}"` : ''}
      src="${image.src}"
      width="${image.width}"
      height="${image.height}"
      alt="${alt}"
    />
  </div>`;
