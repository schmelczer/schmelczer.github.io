import './image.scss';
import { last } from '../../../helper/last';
import { ResponsiveImage } from '../../../types/responsive-image';
import { html } from '../../../types/html';

export const generate = ({
  sizes,
  image,
  alt,
  container,
}: {
  sizes: string;
  image: ResponsiveImage;
  alt: string;
  container: boolean;
}): html => `
  ${container ? `<div class="figure-container">` : ''}
  <img tabindex="0"
    srcset="${image.srcSet}" 
    sizes="${sizes}"
    src="${last(image.images)?.path}" 
    alt="${alt}"
  />
  ${container ? `</div>` : ''}
`;
