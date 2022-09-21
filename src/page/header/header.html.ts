import { html } from '../../types/html';
import './header.scss';

export const generate = ({
  name,
  about,
  photo,
}: {
  name: string;
  about: Array<string>;
  photo: html;
}): html => `
  <section id="about">
    ${photo}
    <div class="placeholder"></div>
    <h1>${name}</h1>
    ${about.map((t) => `<p>${t}</p>`).join('')}
  </section>
`;
