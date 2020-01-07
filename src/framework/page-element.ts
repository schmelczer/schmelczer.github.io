import { PageEvent, PageEventType } from './page-event';
import { EventBroadcaster } from './event-broadcaster';

export abstract class PageElement implements EventBroadcaster {
  protected eventBroadcaster: EventBroadcaster;

  protected constructor(
    private readonly rootElement?: HTMLElement,
    private readonly children: Array<PageElement> = []
  ) {}

  public get element(): HTMLElement {
    return this.rootElement;
  }

  public broadcastEvent(event: PageEvent, parent: EventBroadcaster = null) {
    if (event.type === PageEventType.eventBroadcasterChanged) {
      this.eventBroadcaster = event.data;
    }

    this.handleEvent(event, parent);
    this.children.forEach(c => c.broadcastEvent(event, this));
  }

  protected handleEvent(event: PageEvent, parent: EventBroadcaster) {}

  protected query(query: string): HTMLElement | null {
    return this.element?.querySelector(query);
  }
}
