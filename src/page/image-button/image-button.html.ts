import { url } from '../../types/url';
import './image-button.scss';

export const ImageButtonFactory =
  (
    svg: string,
    title: string,
    { shouldDownload = false }: { shouldDownload?: boolean } = {}
  ) =>
  (href?: url) =>
    `<a ${href ? `href="${href}"` : ''}
      class="image-button" tabindex="-1" rel="noopener" target="_blank" ${
        shouldDownload ? 'download' : ''
      }>
      <button>
        <div class="svg-container">${svg}</div>
        <p>${title}</p>
      </button>
    </a>`;
