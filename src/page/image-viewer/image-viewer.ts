import { PageElement } from '../page-element';
import { generate } from './image-viewer.html';
import { createElement } from '../../helper/create-element';

export class PageImageViewer extends PageElement {
  public constructor() {
    super(createElement(generate()));

    document.body.addEventListener('click', (event: MouseEvent) => {
      if (
        event.target instanceof HTMLImageElement &&
        !event.target.attributes['image-viewer-ignore']
      ) {
        this.showImage(event.target);
      }
    });

    document.body.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        this.hideImage();
      }
    });

    this.htmlRoot.addEventListener('click', this.hideImage.bind(this));
  }

  private showImage(source: HTMLImageElement) {
    const image = this.query('img') as HTMLImageElement;
    image.src = source.src;
    this.htmlRoot.style.visibility = 'visible';
  }

  private hideImage() {
    this.htmlRoot.style.visibility = 'hidden';
  }
}
