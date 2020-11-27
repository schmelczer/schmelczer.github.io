import { PageElement } from '../../page-element';
import { createElement } from '../../../helper/create-element';
import { generate } from './preview.html';
import { Image } from '../image/image';
import { ResponsiveImage } from '../../../types/responsive-image';

export class Preview extends PageElement {
  public constructor(
    posterWebP: ResponsiveImage,
    posterJpeg: ResponsiveImage,
    private readonly url: string,
    alt: string
  ) {
    super(createElement(generate({ alt })));
    this.url += '?portfolioView';
    this.attachElementByReplacing('.poster', new Image(posterWebP, posterJpeg, alt));
    this.query('.start-button').addEventListener('click', this.loadContent.bind(this));
  }

  public setParent(parent: PageElement) {
    new IntersectionObserver(e => {
      if (!e[0].isIntersecting) {
        this.unloadContent();
      }
    }).observe(this.htmlRoot.parentElement!);

    super.setParent(parent);
  }

  public loadContent() {
    this.htmlRoot.classList.add('loaded');
    (this.query('iframe') as HTMLIFrameElement).src = this.url;
  }

  public unloadContent() {
    this.htmlRoot.classList.remove('loaded');
    (this.query('iframe') as HTMLIFrameElement).src = '';
  }
}
