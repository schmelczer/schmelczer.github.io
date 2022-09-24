import { url } from '../../types/url';
import './image-anchor.scss';

export const ImageAnchorFactory =
  (
    svg: string,
    title: string,
    { shouldDownload = false }: { shouldDownload?: boolean } = {}
  ) =>
  (href: url) =>
    `<a rel="noopener" target="_blank" href="${href}" ${
      shouldDownload ? 'download' : ''
    } class="image-anchor">
      ${svg}
      <span>${title}</span>
    </a>`;
