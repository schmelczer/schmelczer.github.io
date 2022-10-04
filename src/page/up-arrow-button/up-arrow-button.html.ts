import arrow from '../../../static/icons/arrow.svg';
import { html } from '../../types/html';
import './up-arrow-button.scss';

export const generate = (label: string): html => `
  <button id="up-arrow-button" class="down" aria-label="${label}">
    ${arrow}
  </button>
`;
