import './video.scss';

import loading from '../../../../static/icons/loading.svg';

import { html } from '../../../types/html';
import play from '../../../../static/icons/play-button.svg';
import { VideoParameters } from './video';

export const generate = ({
  webm,
  mp4,
  posterJpeg,
  invertButton,
}: VideoParameters): html => `
  <div class="figure-container video-container" style="padding-top:${
    (posterJpeg.height / posterJpeg.width) * 100
  }%">
    <img image-viewer-ignore class="poster"/>
    <div class="loading">${loading}</div>
    <video playsinline preload="none">
        <source src="${webm}" type="video/webm"/>
        <source src="${mp4}" type="video/mp4"/>
    </video>
    <div class="start-button ${invertButton ? 'inverted' : ''}">${play}</div>
  </div>
`;
