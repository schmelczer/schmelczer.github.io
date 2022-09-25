import cancel from '../../../static/icons/cancel.svg';
import { html } from '../../types/html';
import './image-viewer.scss';

export const generate = (): html => `
  <div id="image-viewer">
    <img height="0" width="0" image-viewer-ignore />
    <button id="cancel">${cancel}</button>
  </div>
`;
