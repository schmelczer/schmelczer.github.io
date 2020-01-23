import { Primitive } from '../primitive';
import { html, ResponsiveImage } from '../../model/misc';
import { last } from '../../helper/last';

export class Image implements Primitive {
  private static readonly IMAGE_SCREEN_RATIO = 0.8;
  public constructor(
    private readonly image: ResponsiveImage,
    private readonly alt: string
  ) {}

  public toHTML(noContainer = false): html {
    return `
        ${!noContainer ? `<div class="figure-container">` : ''}
            <img tabindex="0"
                srcset="${this.image.srcSet}" 
                sizes="${this.getSizes()}"
                src="${last(this.image.images)?.path}" 
                alt="${this.alt}"
            />
        ${!noContainer ? `</div>` : ''}
      `;
  }

  private getSizes(): string {
    return (
      this.image.images
        .slice(0, -1)
        .map(
          d =>
            `(max-width: ${d.width / Image.IMAGE_SCREEN_RATIO}px) ${d.width}px,`
        )
        .join('\n') + `\n${last(this.image.images).width}px`
    );
  }
}
