import { url } from '../../../types/url';
import './image-anchor.scss';

export const ImageAnchorFactory =
  (
    svg: string,
    title: string,
    { shouldDownload = false }: { shouldDownload?: boolean } = {}
  ) =>
  (href: url) =>
    `
  <a class="image-anchor" 
    href="${href}"
    rel="noopener"
    target="_blank"
    ${shouldDownload ? 'download' : ''}
  >
    <div class="svg-container">
      ${svg}
    </div>
    <p>${title}</p>
  </a>
`;
