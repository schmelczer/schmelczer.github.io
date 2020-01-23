import { Primitive } from '../primitive';
import { url } from '../../model/misc';

export class Video implements Primitive {
  public constructor(
    private readonly poster: url,
    private readonly mp4: url,
    private readonly webm: url,
    private readonly options?: string
  ) {}
  public toHTML(noContainer = false): string {
    return `
        ${!noContainer ? `<div class="figure-container">` : ''}
          <video ${this.options} ${
      this.poster ? `poster="${this.poster}` : ''
    }" >
              <source src="${this.webm}" type="video/webm"/>
              <source src="${this.mp4}" type="video/mp4"/>
          </video>
        ${!noContainer ? `</div>` : ''}
    `;
  }
}
