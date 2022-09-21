import cancel from '../../../static/icons/cancel.svg';
import { html } from '../../types/html';
import './image-viewer.scss';

export const generate = (): html => `
  <section id="image-viewer">
    <img height="0" width="0" image-viewer-ignore />
    <div tabindex="0" id="cancel">${cancel}</div>
  </section>
`;
