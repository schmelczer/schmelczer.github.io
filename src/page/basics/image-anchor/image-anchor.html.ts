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
    <div class="image-anchor">
      ${svg}
      <a rel="noopener" target="_blank" href="${href}" ${
      shouldDownload ? 'download' : ''
    }>${title}</a>
    </div>
`;
