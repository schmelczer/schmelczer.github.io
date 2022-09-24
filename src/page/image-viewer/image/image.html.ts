import { last } from '../../../helper/last';
import { html } from '../../../types/html';
import { ResponsiveImage } from '../../../types/responsive-image';
import './image.scss';

export const Image = ({
  image,
  alt,
  container = false,
  isIgnoredByImageViewer = false,
  imageScreenRatio = 0.8,
}: {
  image: ResponsiveImage;
  alt: string;
  container?: boolean;
  isIgnoredByImageViewer?: boolean;
  imageScreenRatio?: number;
}): html => `
  ${
    container
      ? `<div class="figure-container" style="padding-top:${
          (image.height / image.width) * 100
        }%">`
      : ''
  }
    <div
      class="image"
      style="background-size: cover; background-image: url('${image.placeholder}')"
      ${isIgnoredByImageViewer ? '' : 'tabindex="0"'}
    >
      <picture loading="lazy">
        <source
          srcset="${image.srcSet}" 
          sizes="${getSizes(image, imageScreenRatio)}"
          type="image/"
        />
        <img
          ${isIgnoredByImageViewer ? 'image-viewer-ignore' : ''}
         
          loading="lazy"
          width="${image.width}"
          height="${image.height}"
          src="${last(image.images)?.path}" 
          alt="${alt}"
        />
      </picture>
    </div>
  ${container ? `</div>` : ''}
`;

const getSizes = (image: ResponsiveImage, imageScreenRatio: number): string =>
  image.images
    .slice(0, -1)
    .map((d) => `(max-width: ${d.width / imageScreenRatio}px) ${d.width}px,`)
    .join('\n') + `\n${last(image.images)!.width}px`;
