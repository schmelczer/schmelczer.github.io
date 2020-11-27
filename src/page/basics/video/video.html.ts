import './video.scss';

import { html } from '../../../types/html';
import play from '../../../static/icons/play-button.svg';
import { VideoParameters } from './video';
import { last } from '../../../helper/last';

export const generate = ({ webm, mp4, poster, invertButton }: VideoParameters): html => `
  <div class="figure-container" style="padding-top:${(poster.height / poster.width) *
    100}%">
    <video playsinline preload="none" poster="${last(poster.images)!.path}">
        <source src="${webm}" type="video/webm"/>
        <source src="${mp4}" type="video/mp4"/>
    </video>
    <div class="start-button ${invertButton ? 'inverted' : ''}">${play}</div>
  </div>
`;
