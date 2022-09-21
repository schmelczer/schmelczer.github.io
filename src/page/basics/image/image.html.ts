import { last } from '../../../helper/last';
import { html } from '../../../types/html';
import { ResponsiveImage } from '../../../types/responsive-image';
import './image.scss';

export const Image = ({
  imageWebP,
  imageJpeg,
  alt,
  container = false,
  isIgnoredByImageViewer = false,
}: {
  imageWebP: ResponsiveImage;
  imageJpeg: ResponsiveImage;
  alt: string;
  container?: boolean;
  isIgnoredByImageViewer?: boolean;
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
        sizes="${getSizes(imageWebP)}"
        width="${imageWebP.width}"
        height="${imageWebP.height}"
        type="image/webp"
        alt="${alt}"
      />
      <source
        srcset="${imageJpeg.srcSet}" 
        sizes="${getSizes(imageJpeg)}"
        width="${imageJpeg.width}"
        height="${imageJpeg.height}"
        type="image/jpeg"
        alt="${alt}"
      />
      <img
        ${isIgnoredByImageViewer ? 'image-viewer-ignore' : ''}
        tabindex="0"
        loading="lazy"
        width="${imageJpeg.width}"
        height="${imageJpeg.height}"
        src="${last(imageJpeg.images)?.path}" 
        alt="${alt}"
      />
    </picture>
  ${container ? `</div>` : ''}
`;

const IMAGE_SCREEN_RATIO = 0.8;
const getSizes = (image: ResponsiveImage): string =>
  image.images
    .slice(0, -1)
    .map((d) => `(max-width: ${d.width / IMAGE_SCREEN_RATIO}px) ${d.width}px,`)
    .join('\n') + `\n${last(image.images)!.width}px`;
