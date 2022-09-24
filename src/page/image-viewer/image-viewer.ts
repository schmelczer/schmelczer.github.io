import { createElement } from '../../helper/create-element';
import { PageElement } from '../page-element';
import { generate } from './image-viewer.html';

export class PageImageViewer extends PageElement {
  public constructor() {
    super(createElement(generate()));

    document.body.addEventListener('click', (event: MouseEvent) => {
      const element = event.target as HTMLElement;

      if (element.classList?.contains('image')) {
        this.showImage(element.querySelector('img')!);
      }

      if (element instanceof HTMLImageElement) {
        this.showImage(element);
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
    if (source.attributes['image-viewer-ignore'] as boolean | undefined) {
      return;
    }

    const image = this.query('img') as HTMLImageElement;
    image.src = '';
    image.src = source.src;
    image.height = source.height;
    image.width = source.width;
    this.htmlRoot.style.visibility = 'visible';
  }

  private hideImage() {
    this.htmlRoot.style.visibility = 'hidden';
  }
}
