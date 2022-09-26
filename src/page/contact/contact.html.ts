import { html } from '../../types/html';
import './contact.scss';

// @ts-ignore: injected by webpack
const LAST_EDIT = new Date(__CURRENT_DATE__);

export const Contact = ({
  title,
  links,
  lastEditText,
}: {
  title: string;
  links: Array<html>;
  lastEditText: string;
}): html => `
  <section id="contact">
    <h2>${title}</h2>

    <div class="links">
      ${links.join('')}
    </div>

    <aside>
      <p>
        ${lastEditText}
        <time datetime="${LAST_EDIT.toISOString()}">${LAST_EDIT.toLocaleDateString()}</time>
      </p>
    </aside>
  </section>
`;
