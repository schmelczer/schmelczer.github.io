import loading from '../../../../static/icons/loading.svg';
import play from '../../../../static/icons/play-button.svg';
import { html } from '../../../types/html';
import { ResponsiveImage } from '../../../types/responsive-image';
import { Image } from '../../basics/image/image.html';
import './preview.scss';

export const generate = ({
  alt,
  posterWebP,
  posterJpeg,
}: {
  alt: string;
  posterWebP: ResponsiveImage;
  posterJpeg: ResponsiveImage;
}): html => `
  <div class="preview">
    ${Image({
      imageWebP: posterWebP,
      imageJpeg: posterJpeg,
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
