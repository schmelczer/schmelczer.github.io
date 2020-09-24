import { Primitive } from '../primitive';
import { html, url } from '../../model/misc';

export class Anchor implements Primitive {
  public constructor(private readonly href: url, private readonly text: string) {}

  public toHTML(): html {
    return `
        <a class="primitive-anchor" 
           href="${this.href}"
           rel="noreferrer"
           target="_blank"
        >${this.text}</a>
        <br/>
    `;
  }
}
