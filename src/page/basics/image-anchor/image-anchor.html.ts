import './image-anchor.scss';
import { html } from '../../../types/html';
import { url } from '../../../types/url';

export const generate = ({
  href,
  svg,
  title,
}: {
  href: url;
  svg: url;
  title: string;
}): html => `
  <a class="image-anchor" 
    href="${href}"
    rel="noopener"
    target="_blank"
  >
    <div class="svgContainer">
      ${svg}
    </div>
    <p>${title}</p>
  </a>
`;
