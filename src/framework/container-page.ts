import { PageElement } from './page-element';
import { OnEventBroadcasterChangedEvent } from './events/concrete-events/on-event-broadcaster-changed-event';
import { OnLoadEvent } from './events/concrete-events/on-load-event';

export class ContainerPage extends PageElement {
  public constructor(rootElement: HTMLElement, children: Array<PageElement>) {
    children.filter(e => e.element).forEach(e => rootElement.appendChild(e.element));
    super(rootElement, children);
  }

  public setAsMain() {
    this.broadcastEvent(new OnEventBroadcasterChangedEvent(this));
    this.broadcastEvent(new OnLoadEvent(this));
  }
}
