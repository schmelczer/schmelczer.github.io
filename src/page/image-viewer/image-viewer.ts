import { PageElement } from '../../framework/page-element';

import { generate } from './image-viewer.html';
import { PageEvent, PageEventType } from '../../framework/events/page-event';
import { createElement } from '../../framework/helper/create-element';

export class PageImageViewer extends PageElement {
  public constructor() {
    super(createElement(generate()));
    this.element.onclick = () => PageImageViewer.hide(this.element);
  }

  protected handleEvent(event: PageEvent, parent: PageElement) {
    if (event.type === PageEventType.onLoad) {
      document.body.addEventListener('keydown', this.handleKeydown.bind(this));

      const media = Array.prototype.slice.call(
        parent.element.querySelectorAll('img')
      );

      media
        .filter((e: HTMLElement) => e.parentElement !== this.element)
        .forEach(
          (e: HTMLImageElement) => (e.onclick = this.handleClick.bind(this))
        );
    }
  }

  private handleClick(event: Event) {
    const container = this.query('#container');
    container.firstElementChild?.remove();

    const element: HTMLImageElement = new Image();
    element.src = (event.target as HTMLImageElement).src;
    container.appendChild(element);
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
