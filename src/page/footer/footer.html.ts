import cvIcon from '../../../static/icons/cv.svg';
import emailIcon from '../../../static/icons/email.svg';
import githubIcon from '../../../static/icons/github.svg';
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
  linkedInLink,
  linkedInText,
  gitHubLink,
  gitHubText,
  lastEditText,
}: {
  title: string;
  email: string;
  curriculaVitae: Array<{
    name: string;
    url: url;
  }>;
  linkedInLink: url;
  linkedInText: string;
  gitHubLink: url;
  gitHubText: string;
  lastEditText: string;
}): html => `
  <footer id="footer">
    <h2>${title}</h2>
    <ul>
        ${curriculaVitae
          .map(
            (cv) => `
              <li>
               ${cvIcon}
                <a rel="noopener" href="${cv.url}" download>${cv.name}</a>
              </li>
            `
          )
          .join('')}
      <li>
        ${githubIcon}
        <a rel="noopener" target="_blank" href="${gitHubLink}">${gitHubText}</a>
      </li>
      <li>
        ${linkedinIcon}
        <a rel="noopener" target="_blank" href="${linkedInLink}">${linkedInText}</a>
      </li>
      <li>
        ${emailIcon}
        <a rel="noopener" href="mailto:${email}">${email}</a>
      </li>
    </ul>
    <aside class="other">
      <p>${lastEditText} <time datetime="${LAST_EDIT.toISOString()}">${LAST_EDIT.toLocaleDateString()}</time></p>
    </aside>
  </footer>
`;
