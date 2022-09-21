import { html } from '../../types/html';
import './header.scss';

export const generate = ({
  name,
  about,
}: {
  name: string;
  about: Array<string>;
}): html => `
  <section id="about">
    <div class="picture"></div>
    <div class="placeholder"></div>
    <h1>${name}</h1>
    ${about.map((t) => `<p>${t}</p>`).join('\n')}
  </section>
`;
