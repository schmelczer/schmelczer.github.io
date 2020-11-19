import './video.scss';
import { url } from '../../../types/url';
import { html } from '../../../types/html';

export const generate = ({
  poster,
  options,
  webm,
  mp4,
  container,
}: {
  poster: url;
  options: string;
  webm: url;
  mp4: url;
  container: boolean;
}): html => `
  ${container ? `<div class="figure-container">` : ''}
    <video loading="lazy" ${options} ${poster ? `poster="${poster}` : ''}" >
        <source src="${webm}" type="video/webm"/>
        <source src="${mp4}" type="video/mp4"/>
    </video>
  ${container ? `</div>` : ''}
`;
