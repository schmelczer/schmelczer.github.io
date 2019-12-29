import { Footer } from "../../model/portfolio";
import { html, url } from "../../model/misc";

import "./footer.scss";
import cvIcon from "../../static/icons/cv.svg";
import emailIcon from "../../static/icons/at.svg";

export const generate = ({
  title,
  email,
  cv,
  cvName,
  lastEditName,
  lastEdit,
  githubLinkName,
  githubLink
}: Footer): html => `
    <footer id="page-footer">
        <h2>${title}</h2>
        <ul>
            <li>
                <img src="${cvIcon}" alt="CV" class="no-open" />
                <a id="cv" href="${cv}" target="_blank">${cvName}</a>
            </li>
            <li>
                <img src="${emailIcon}" alt="email" class="no-open"/>
                <a id="email" href="mailto:${email}">${email}</a>
            </li>
        </ul>
        <aside class="other">
           <h6>${lastEditName} ${lastEdit.toLocaleDateString()}</h6>
        </aside>
    </footer>
`;
