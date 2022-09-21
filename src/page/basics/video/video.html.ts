import loading from '../../../../static/icons/loading.svg';
import play from '../../../../static/icons/play-button.svg';
import { html } from '../../../types/html';
import { Image } from '../../basics/image/image.html';
import { VideoParameters } from './video-parameters';
import './video.scss';

export const generate = ({
  webm,
  mp4,
  posterWebP,
  invertButton,
}: VideoParameters): html => `
  <div class="figure-container video-container" style="padding-top:${
    (posterWebP.height / posterWebP.width) * 100
  }%">
    ${Image({
      imageWebP: posterWebP,
      alt: `thumbnail for the video`,
      isIgnoredByImageViewer: true,
    })}
    <div class="loading">${loading}</div>
    <video playsinline preload="none">
        <source src="${webm}" type="video/webm"/>
        <source src="${mp4}" type="video/mp4"/>
    </video>
    <div class="start-button ${invertButton ? 'inverted' : ''}">${play}</div>
  </div>
`;
