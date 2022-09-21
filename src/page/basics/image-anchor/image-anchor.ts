import { url } from '../../../types/url';
import { generate } from './image-anchor.html';

export const ImageAnchorFactory =
  (
    svg: string,
    title: string,
    { shouldDownload = false }: { shouldDownload?: boolean } = {}
  ) =>
  (href: url) =>
    generate({ href, svg, title, shouldDownload });
