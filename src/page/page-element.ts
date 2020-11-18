import { EventHandler } from '../events/event-handler';
import { EventBroadcaster } from '../events/event-broadcaster';
import { OnEventBroadcasterChangedEvent } from '../events/concrete-events/on-event-broadcaster-changed-event';
import { OptionalEvent } from '../events/optional-event';
import { Event } from '../events/event';
import { OnLoadEvent } from '../events/concrete-events/on-load-event';

export abstract class PageElement extends EventHandler implements EventBroadcaster {
  protected eventBroadcaster: EventBroadcaster;

  public constructor(
    public readonly htmlRoot?: HTMLElement,
    protected children: Array<PageElement> = []
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
    return this.htmlRoot?.querySelector(query);
  }

  protected attachElementByReplacing(query: string, element: PageElement) {
    const old = this.query(query);
    old.parentElement.replaceChild(element.htmlRoot, old);

    this.children.push(element);
  }

  protected attachElementAsChildOf(query: string, element: PageElement) {
    this.query(query).appendChild(element.htmlRoot);
    this.children.push(element);
  }

  protected attachElement(element: PageElement) {
    this.htmlRoot.appendChild(element.htmlRoot);
    this.children.push(element);
  }
}
