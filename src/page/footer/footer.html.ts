import { Footer } from '../../types/portfolio';
import './footer.scss';
import cvIcon from '../../static/icons/cv.svg';
import emailIcon from '../../static/icons/email.svg';
import { html } from '../../types/html';

export const generate = ({
  title,
  email,
  curriculaVitae,
  lastEditText,
  lastEdit,
}: Footer): html => `
  <footer id="page-footer">
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
        ${emailIcon}
        <a id="email" href="mailto:${email}">${email}</a>
      </li>
    </ul>
    <aside class="other">
      <p>${lastEditText} <time datetime="${lastEdit.toISOString()}">${lastEdit.toLocaleDateString()}</time></p>
    </aside>
  </footer>
`;
