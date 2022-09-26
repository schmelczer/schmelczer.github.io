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
  <header id="about">
    <div class="photo-container">
      ${photo}
      <div class="placeholder"></div>
    </div>

    <h1>${name}</h1>

    ${about.map((t) => `<p>${t}</p>`).join('')}
  </header>
`;
