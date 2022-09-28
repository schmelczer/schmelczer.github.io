import loading from '../../../../static/icons/loading.svg';
import { html } from '../../../types/html';
import { ResponsiveImage } from '../../../types/responsive-image';
import { Image } from '../../image/image.html';
import './preview.scss';

export const generate = ({
  alt,
  poster,
}: {
  alt: string;
  poster: ResponsiveImage;
}): html =>
  `${Image({
    image: poster,
    alt,
  })}
  <div class="overlay">
    <div class="loading">${loading}</div>
    <iframe title="${alt}" allowfullscreen loading="lazy"></iframe>
  </div>`;
