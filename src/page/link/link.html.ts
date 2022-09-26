import { url } from '../../types/url';
import './link.scss';

export const Link = (title: string, href: url) =>
  `<a class="link" href="${href}">${title}</a>`;
