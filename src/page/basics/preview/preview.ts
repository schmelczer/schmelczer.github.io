import { createElement } from '../../../helper/create-element';
import { ResponsiveImage } from '../../../types/responsive-image';
import { PageElement } from '../../page-element';
import { generate } from './preview.html';

export class Preview extends PageElement {
  public constructor(
    posterWebP: ResponsiveImage,
    posterJpeg: ResponsiveImage,
    private readonly url: string,
    alt: string
  ) {
    super(createElement(generate({ posterWebP, posterJpeg, alt })));
    this.url += '?portfolioView';
    this.query('.start-button').addEventListener('click', this.loadContent.bind(this));
  }

  protected setParent(parent: PageElement) {
    new IntersectionObserver((e) => {
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
