import cvIcon from '../../../static/icons/cv.svg';
import emailIcon from '../../../static/icons/email.svg';
import linkedinIcon from '../../../static/icons/linkedin.svg';
import { html } from '../../types/html';
import { FooterParameters } from './footer';
import './footer.scss';

export const generate = ({
  title,
  email,
  curriculaVitae,
  linkedin,
  lastEditText,
  lastEdit,
}: FooterParameters): html => `
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
          .join('\n')}
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
      <p>${lastEditText} <time datetime="${lastEdit.toISOString()}">${lastEdit.toLocaleDateString()}</time></p>
    </aside>
  </footer>
`;
