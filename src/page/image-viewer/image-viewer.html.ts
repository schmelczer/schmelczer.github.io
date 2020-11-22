import cancel from '../../static/icons/cancel.svg';

import './image-viewer.scss';
import { html } from '../../types/html';

export const generate = (): html => `
  <section id="image-viewer">
    <img image-viewer-ignore />
    <div tabindex="0" id="cancel">${cancel}</div>
  </section>
`;
