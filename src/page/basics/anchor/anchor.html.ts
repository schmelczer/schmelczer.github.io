import './anchor.scss';
import { html } from '../../../types/html';
import { url } from '../../../types/url';

export const generate = ({ href, text }: { href: url; text: string }): html => `
  <a class="primitive-anchor" 
    href="${href}"
    target="_blank"
  >${text}</a>
  <br/>
`;
