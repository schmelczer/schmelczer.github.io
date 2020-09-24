import { EventBroadcaster } from './events/event-broadcaster';
import { EventHandler } from './events/event-handler';
import { OnEventBroadcasterChangedEvent } from './events/concrete-events/on-event-broadcaster-changed-event';
import { Event } from './events/event';
import { OnLoadEvent } from './events/concrete-events/on-load-event';
import { OptionalEvent } from './events/optional-event';

export abstract class PageElement extends EventHandler implements EventBroadcaster {
  protected eventBroadcaster: EventBroadcaster;

  protected constructor(
    public readonly element?: HTMLElement,
    private readonly children: Array<PageElement> = []
  ) {
    super();
  }

  public broadcastEvent(event: Event) {
    event = this.handle(event);
    if (event) {
      this.children.forEach(c => c.broadcastEvent(event));
    }
  }

  public handleOnEventBroadcasterChangedEvent(
    event: OnEventBroadcasterChangedEvent
  ): OptionalEvent {
    this.eventBroadcaster = event.broadcaster;
    return super.handleOnEventBroadcasterChangedEvent(event);
  }

  public handleOnLoadEvent(_: OnLoadEvent): OptionalEvent {
    return super.handleOnLoadEvent(new OnLoadEvent(this));
  }

  protected query(query: string): HTMLElement | null {
    return this.element?.querySelector(query);
  }
}
