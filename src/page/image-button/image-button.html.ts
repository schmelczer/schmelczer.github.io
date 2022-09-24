import { url } from '../../types/url';
import './image-button.scss';

export const ImageButtonFactory =
  (
    svg: string,
    title: string,
    { shouldDownload = false }: { shouldDownload?: boolean } = {}
  ) =>
  (href: url) =>
    `
  <a class="image-button" 
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
