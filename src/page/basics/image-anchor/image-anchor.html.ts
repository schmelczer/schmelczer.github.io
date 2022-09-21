import { html } from '../../../types/html';
import { url } from '../../../types/url';
import './image-anchor.scss';

export const generate = ({
  href,
  svg,
  title,
  shouldDownload,
}: {
  href: url;
  svg: url;
  title: string;
  shouldDownload: boolean;
}): html => `
  <a class="image-anchor" 
    href="${href}"
    rel="noopener"
    target="_blank"
    ${shouldDownload ? 'download' : ''}
  >
    <div class="svgContainer">
      ${svg}
    </div>
    <p>${title}</p>
  </a>
`;
