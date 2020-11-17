import { PageElement } from '../page-element';
import { OnLoadEvent } from '../../events/concrete-events/on-load-event';
import { OnEventBroadcasterChangedEvent } from '../../events/concrete-events/on-event-broadcaster-changed-event';

export class Body extends PageElement {
  constructor(root: HTMLElement, children: Array<PageElement>) {
    super(root);
    children.forEach(c => this.attachElement(c));

    this.broadcastEvent(new OnEventBroadcasterChangedEvent(this));
    this.broadcastEvent(new OnLoadEvent(this));
  }
}
