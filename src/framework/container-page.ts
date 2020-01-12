import { PageElement } from './page-element';
import { PageEventType } from './events/page-event';

export class ContainerPage extends PageElement {
  public constructor(rootElement: HTMLElement, children: Array<PageElement>) {
    children
      .filter(e => e.element)
      .forEach(e => rootElement.appendChild(e.element));
    super(rootElement, children);
  }

  public setAsMain() {
    this.broadcastEvent(
      { type: PageEventType.eventBroadcasterChanged, data: this },
      this
    );

    this.broadcastEvent({ type: PageEventType.onLoad }, this);
  }
}
