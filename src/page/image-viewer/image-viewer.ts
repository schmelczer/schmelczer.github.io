import { PageElement } from '../page-element';

import { generate } from './image-viewer.html';
import { createElement } from '../../helper/create-element';
import { OnLoadEvent } from '../../events/concrete-events/on-load-event';
import { OptionalEvent } from '../../events/optional-event';

export class PageImageViewer extends PageElement {
  public constructor() {
    super(createElement(generate()));
    this.htmlRoot.onclick = () => PageImageViewer.hide(this.htmlRoot);
  }

  public handleOnLoadEvent(event: OnLoadEvent): OptionalEvent {
    document.body.addEventListener('keydown', this.handleKeydown.bind(this));

    const media = Array.prototype.slice.call(document.querySelectorAll('img'));

    media
      .filter((e: HTMLElement) => e.parentElement !== this.htmlRoot)
      .forEach((e: HTMLImageElement) => (e.onclick = this.handleClick.bind(this)));
    return super.handleOnLoadEvent(event);
  }

  private handleClick(event: Event) {
    const container = this.query('#container');
    container.firstElementChild?.remove();

    const element: HTMLImageElement = new Image();
    element.src = (event.target as HTMLImageElement).src;
    container.appendChild(element);
    PageImageViewer.show(this.htmlRoot);
  }

  private handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      PageImageViewer.hide(this.htmlRoot);
    }
  }

  private static show(e: HTMLElement) {
    e.style.display = 'flex';
  }
  private static hide(e: HTMLElement) {
    e.style.display = 'none';
  }
}
