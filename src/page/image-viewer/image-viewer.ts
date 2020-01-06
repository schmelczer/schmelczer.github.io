import { PageElement } from '../../framework/page-element';

import { generate } from './image-viewer.html';
import { PageEvent, PageEventType } from '../../framework/page-event';
import { createElement } from '../../framework/helper/create-element';

export class PageImageViewer extends PageElement {
  public constructor() {
    const root = createElement(generate());
    root.onclick = () => PageImageViewer.hide(root);
    super(root);
  }

  protected handleEvent(event: PageEvent, parent: PageElement) {
    if (event.type !== PageEventType.onLoad) {
      return;
    }

    document.body.addEventListener('keydown', this.handleKeydown.bind(this));

    const images = Array.prototype.slice.call(
      parent.element.querySelectorAll('img')
    );
    images
      .filter(
        (img: HTMLImageElement) =>
          img.parentElement !== this.element &&
          !img.classList.contains('no-open')
      )
      .forEach(
        (img: HTMLImageElement) => (img.onclick = this.handleClick.bind(this))
      );
  }

  private handleClick(event: Event) {
    (this.query(
      '#photo'
    ) as HTMLImageElement).src = (event.target as HTMLImageElement).src;

    PageImageViewer.show(this.element);
  }

  private handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      PageImageViewer.hide(this.element);
    }
  }

  private static show(e: HTMLElement) {
    e.style.display = 'flex';
  }
  private static hide(e: HTMLElement) {
    e.style.display = 'none';
  }
}
