import play from '../../../static/icons/play-button.svg';
import { html } from '../../types/html';
import './figure.scss';

export const generate = ({
  children,
  hasButton,
  invertButton,
}: {
  children: html;
  hasButton: boolean;
  invertButton: boolean;
}): html => `
  <div class="figure-container" tabindex=0 >
    ${children}
    ${
      hasButton
        ? `<div class="start-button ${invertButton ? 'inverted' : ''}" >${play}</div>`
        : ''
    }
  </div>`;
