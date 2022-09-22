import cvIcon from '../../../static/icons/cv.svg';
import emailIcon from '../../../static/icons/email.svg';
import linkedinIcon from '../../../static/icons/linkedin.svg';
import { html } from '../../types/html';
import { url } from '../../types/url';
import './footer.scss';

// @ts-ignore: injected by webpack
const LAST_EDIT = new Date(__CURRENT_DATE__);

export const Footer = ({
  title,
  email,
  curriculaVitae,
  linkedin,
  lastEditText,
}: {
  title: string;
  email: url;
  linkedin: url;
  curriculaVitae: Array<{
    name: string;
    url: url;
  }>;
  lastEditText: string;
}): html => `
  <footer id="footer">
    <h2>${title}</h2>
    <ul>
        ${curriculaVitae
          .map(
            (cv, i) => `
              <li>
               ${cvIcon}
                <a id="cv-${i}" href="${cv.url}" target="_blank">${cv.name}</a>
              </li>
            `
          )
          .join('')}
      <li>
        ${linkedinIcon}
        <a id="linkedin" target="_blank" href="${linkedin}">Find me on LinkedIn</a>
      </li>
      <li>
        ${emailIcon}
        <a id="email" href="mailto:${email}">${email}</a>
      </li>
    </ul>
    <aside class="other">
      <p>${lastEditText} <time datetime="${LAST_EDIT.toISOString()}">${LAST_EDIT.toLocaleDateString()}</time></p>
    </aside>
  </footer>
`;
