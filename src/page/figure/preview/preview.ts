import { ResponsiveImage } from '../../../types/responsive-image';
import { Figure } from '../figure';
import { generate } from './preview.html';

export class Preview extends Figure {
  public constructor(
    poster: ResponsiveImage,
    private readonly url: string,
    alt: string
  ) {
    super(generate({ poster, alt }), {
      hasButton: true,
    });
    this.url += '?portfolioView';
  }

  protected onClick() {
    this.htmlRoot.classList.add('loaded');
    (this.query('iframe') as HTMLIFrameElement).src = this.url;
  }

  protected initialize() {
    new IntersectionObserver((e) => {
      if (!e[0].isIntersecting) {
        this.htmlRoot.classList.remove('loaded');
        (this.query('iframe') as HTMLIFrameElement).src = '';
      }
    }).observe(this.htmlRoot.parentElement!);

    super.initialize();
  }
}
