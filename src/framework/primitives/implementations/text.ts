import { Primitive } from '../primitive';
import { html } from '../../../model/misc';

export class Text implements Primitive {
  public constructor(private readonly text: string) {}

  public toHTML(): html {
    return `<p class="primitive-text">${this.text}</p>`;
  }
}
