import './about.scss';
import { Header } from '../../types/portfolio';
import { html } from '../../types/html';

export const generate = ({ name }: Header): html => `
  <section id="about">
    <div class="picture"></div>
    <div class="placeholder"></div>
    <h1>${name}</h1>
  </section>
`;
