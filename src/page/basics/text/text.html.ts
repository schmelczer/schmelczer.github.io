import './text.scss';
import { html } from '../../../types/html';

export const generate = (text: string): html => `
  <p class="primitive-text">${text}</p>
`;
