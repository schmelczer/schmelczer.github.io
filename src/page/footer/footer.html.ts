import { Footer } from '../../model/portfolio';
import { html } from '../../model/misc';
import emailIcon from '../../static/icons/at.svg';
import cvIcon from '../../static/icons/cv.svg';

import './footer.scss';

export const generate = ({
  title,
  email,
  curiumVitaes,
  gitHub,
  lastEditText,
  lastEdit,
}: Footer): html => `
    <footer id="page-footer">
        <h2>${title}</h2>
        <ul>
            ${curiumVitaes
              .map(
                cv =>
                  `<li>
                    <img src="${cvIcon}" alt="CV" class="no-open" />
                    <a id="cv" href="${cv.url}" target="_blank">${cv.name}</a>
                 </li>`
              )
              .join('\n')}
            <li>
                <img src="${emailIcon}" alt="email" class="no-open"/>
                <a id="email" href="mailto:${email}">${email}</a>
            </li>
        </ul>
        <aside class="other">
           <h6>${lastEditText} <time datetime="${lastEdit.toISOString()}">${lastEdit.toLocaleDateString()}</time></h6>
        </aside>
    </footer>
`;
