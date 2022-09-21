import { html } from '../../types/html';
import './header.scss';

export const generate = (name: string): html => `
  <section id="about">
    <div class="picture"></div>
    <div class="placeholder"></div>
    <h1>${name}</h1>
  </section>
`;
