import './header.scss';

import { html } from '../../types/html';

export const generate = (name: string): html => `
  <section id="about">
    <div class="picture"></div>
    <div class="placeholder"></div>
    <h1>${name}</h1>
  </section>
`;
