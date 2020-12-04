import './preview.scss';
import play from '../../../static/icons/play-button.svg';
import loading from '../../../static/icons/loading.svg';
import { html } from '../../../types/html';

export const generate = ({ alt }: { alt: string }): html => `
  <div class="preview">
    <img image-viewer-ignore class="poster"/>
    <div class="overlay">
      <div class="loading">${loading}</div>
      <iframe title="${alt}" allowfullscreen loading="lazy"></iframe>
      <div class="start-button">${play}</div>
    </div>
  </div>
`;
