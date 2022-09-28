import { html } from '../../../types/html';
import { Image } from '../../image/image.html';
import { VideoParameters } from './video-parameters';
import './video.scss';

export const generate = ({ webm, mp4, poster, altText }: VideoParameters): html => `
    ${Image({
      image: poster,
      alt: altText,
    })}
    <video playsinline controls preload="none">
        <source src="${webm}" type="video/webm"/>
        <source src="${mp4}" type="video/mp4"/>
    </video>`;
