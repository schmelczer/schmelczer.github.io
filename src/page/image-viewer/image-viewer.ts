import { PageElement } from '../page-element';
import { generate } from './image-viewer.html';

export class ImageViewer extends PageElement {
  public constructor() {
    super(generate());

    document.body.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        this.hideImage();
      }
    });

    this.htmlRoot.addEventListener('click', this.hideImage.bind(this));
  }

  public showImage(source: HTMLImageElement) {
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
