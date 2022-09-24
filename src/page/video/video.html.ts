import play from '../../../static/icons/play-button.svg';
import { html } from '../../types/html';
import { Image } from '../image-viewer/image/image.html';
import { VideoParameters } from './video-parameters';
import './video.scss';

export const generate = ({
  webm,
  mp4,
  poster,
  invertButton,
  altText,
}: VideoParameters): html => `
  <div class="figure-container video-container" style="padding-top:${
    (poster.height / poster.width) * 100
  }%">
    ${Image({
      image: poster,
      alt: altText,
      isIgnoredByImageViewer: true,
    })}
    <video playsinline preload="none">
        <source src="${webm}" type="video/webm"/>
        <source src="${mp4}" type="video/mp4"/>
    </video>
    <div class="start-button ${invertButton ? 'inverted' : ''}" tabindex=0>${play}</div>
  </div>
`;
