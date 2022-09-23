import { html } from '../../types/html';
import './footer.scss';

// @ts-ignore: injected by webpack
const LAST_EDIT = new Date(__CURRENT_DATE__);

export const Footer = ({
  title,
  links,
  lastEditText,
}: {
  title: string;
  links: Array<html>;
  lastEditText: string;
}): html => `
  <footer id="footer">
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
  </footer>
`;
