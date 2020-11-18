import cancel from '../../static/icons/cancel.svg';

import './image-viewer.scss';
import { html } from '../../types/html';

export const generate = (): html => `
  <section id="image-viewer">
    <div id="container"></div>
    <div tabindex="0" id="cancel">${cancel}</div>
  </section>
`;
