import loading from '../../../static/icons/loading.svg';
import play from '../../../static/icons/play-button.svg';
import { html } from '../../types/html';
import { ResponsiveImage } from '../../types/responsive-image';
import { Image } from '../image-viewer/image/image.html';
import './preview.scss';

export const generate = ({
  alt,
  poster,
}: {
  alt: string;
  poster: ResponsiveImage;
}): html => `
  <div class="preview">
    ${Image({
      image: poster,
      alt,
      container: true,
      isIgnoredByImageViewer: true,
    })}
    <div class="overlay">
      <div class="loading">${loading}</div>
      <iframe title="${alt}" allowfullscreen loading="lazy"></iframe>
      <div class="start-button">${play}</div>
    </div>
  </div>
`;
