import { url } from '../../types/url';
import './image-button.scss';

export const ImageButtonFactory =
  (
    svg: string,
    title: string,
    { shouldDownload = false }: { shouldDownload?: boolean } = {}
  ) =>
  (href?: url) =>
    `
    <button class="image-button">
     ${
       href
         ? `<a href="${href}" tabindex="-1" rel="noopener" target="_blank" ${
             shouldDownload ? 'download' : ''
           }>`
         : ''
     }
        <div class="svg-container">${svg}</div>
        <p>${title}</p>
        ${href ? '</a>' : ''}
    </button>`;
