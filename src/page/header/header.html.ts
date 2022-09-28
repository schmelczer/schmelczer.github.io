import { html } from '../../types/html';
import './header.scss';

export const generate = ({
  name,
  about,
}: {
  name: string;
  about: Array<string>;
}): html => `
  <header id="about">
    <div class="profile-picture">
      <img/>
      <div class="placeholder"></div>
    </div>

    <h1>${name}</h1>

    ${about.map((t) => `<p>${t}</p>`).join('')}
  </header>
`;
