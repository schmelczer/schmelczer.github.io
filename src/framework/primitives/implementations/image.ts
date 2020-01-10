import { Primitive } from '../primitive';
import { html, ResponsiveImage } from '../../model/misc';
import { last } from '../../helper/last';

export class Image implements Primitive {
  public constructor(
    private readonly image: ResponsiveImage,
    private readonly alt: string
  ) {}

  public toHTML(disableInnerShadow = false): html {
    return `
        ${!disableInnerShadow ? `<div class="figure-container">` : ''}
            <img tabindex="0"
                srcset="${this.image.srcSet}" 
                src="${last(this.image.images)?.path}" 
                alt="${this.alt}"
            />
        ${!disableInnerShadow ? `</div>` : ''}
      `;
  }
}
