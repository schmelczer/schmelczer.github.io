import './anchor.scss';
import { html } from '../../../types/html';

export const generate = ({ href, text }: { href: string; text: string }): html => `
  <a class="primitive-anchor" 
    href="${href}"
    target="_blank"
  >${text}</a>
  <br/>
`;
