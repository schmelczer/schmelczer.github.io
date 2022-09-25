import { html } from '../../../types/html';
import { ResponsiveImage } from '../../../types/responsive-image';
import './image.scss';

export const Image = ({
  image,
  alt,
  container = false,
  isIgnoredByImageViewer = false,
}: {
  image: ResponsiveImage;
  alt: string;
  container?: boolean;
  isIgnoredByImageViewer?: boolean;
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
      <img
        ${isIgnoredByImageViewer ? 'image-viewer-ignore' : ''}
        loading="lazy"
        width="${image.width}"
        height="${image.height}"
        srcset="${image.srcSet}"
        src="${image.src}"
        alt="${alt}"
      />
    </div>
  ${container ? '</div>' : ''}
`;
