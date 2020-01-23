import { PageElement } from '../../framework/page-element';

import { generate } from './image-viewer.html';
import { createElement } from '../../framework/helper/create-element';
import { OnLoadEvent } from '../../framework/events/concrete-events/on-load-event';
import { OptionalEvent } from '../../framework/events/optional-event';

export class PageImageViewer extends PageElement {
  public constructor() {
    super(createElement(generate()));
    this.element.onclick = () => PageImageViewer.hide(this.element);
  }

  public handleOnLoadEvent(event: OnLoadEvent): OptionalEvent {
    document.body.addEventListener('keydown', this.handleKeydown.bind(this));

    const media = Array.prototype.slice.call(document.querySelectorAll('img'));

    media
      .filter((e: HTMLElement) => e.parentElement !== this.element)
      .forEach(
        (e: HTMLImageElement) => (e.onclick = this.handleClick.bind(this))
      );
    return super.handleOnLoadEvent(event);
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
