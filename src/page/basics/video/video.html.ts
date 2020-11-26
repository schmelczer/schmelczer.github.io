import './video.scss';
import { url } from '../../../types/url';
import { html } from '../../../types/html';

export const generate = ({
  webm,
  mp4,
  poster,
  shouldActLikeGif,
  container,
}: {
  webm: url;
  mp4: url;
  poster?: url;
  shouldActLikeGif?: boolean;
  container?: boolean;
}): html => `
  ${container === undefined || container ? `<div class="figure-container">` : ''}
    <video loading="lazy" ${
      shouldActLikeGif ? 'autoplay loop muted' : ''
    } controls playsinline preload="metadata" ${poster ? `poster="${poster}` : ''}" >
        <source src="${webm}" type="video/webm"/>
        <source src="${mp4}" type="video/mp4"/>
    </video>
  ${container === undefined || container ? `</div>` : ''}
`;
