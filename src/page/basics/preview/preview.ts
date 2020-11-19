import { PageElement } from '../../page-element';
import { createElement } from '../../../helper/create-element';
import { generate } from './preview.html';
import { Image } from '../image/image';
import { ResponsiveImage } from '../../../types/responsive-image';
import { OnLoadEvent } from '../../../events/concrete-events/on-load-event';

export class Preview extends PageElement {
  public constructor(poster: ResponsiveImage, private readonly url: string, alt: string) {
    super(createElement(generate({ alt })));
    this.url += '?portfolioView';
    this.attachElementByReplacing('.poster', new Image(poster, alt));
    this.query('.load-button').addEventListener('click', this.loadContent.bind(this));
  }

  public handleOnLoadEvent(event: OnLoadEvent): OnLoadEvent {
    new IntersectionObserver(e => {
      if (!e[0].isIntersecting) {
        this.unloadContent();
      }
    }).observe(this.htmlRoot.parentElement);

    return event;
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
