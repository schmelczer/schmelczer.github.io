import { last } from '../../../helper/last';
import { html } from '../../../types/html';
import { ResponsiveImage } from '../../../types/responsive-image';
import './image.scss';

export const Image = ({
  imageWebP,
  alt,
  container = false,
  isIgnoredByImageViewer = false,
  imageScreenRatio = 0.8,
}: {
  imageWebP: ResponsiveImage;
  alt: string;
  container?: boolean;
  isIgnoredByImageViewer?: boolean;
  imageScreenRatio?: number;
}): html => `
  ${
    container
      ? `<div class="figure-container" style="padding-top:${
          (imageWebP.height / imageWebP.width) * 100
        }%">`
      : ''
  }
    <div
      class="image"
      style="background-size: cover; background-image: url('${imageWebP.placeholder}')",
    }}>
      <picture loading="lazy">
        <source
          srcset="${imageWebP.srcSet}" 
          sizes="${getSizes(imageWebP, imageScreenRatio)}"
          type="image/webp"
        />
        <img
          ${isIgnoredByImageViewer ? 'image-viewer-ignore' : ''}
          tabindex="0"
          loading="lazy"
          width="${imageWebP.width}"
          height="${imageWebP.height}"
          src="${last(imageWebP.images)?.path}" 
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
