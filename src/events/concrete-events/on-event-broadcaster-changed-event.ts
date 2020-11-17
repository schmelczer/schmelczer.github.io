import { Event } from '../event';
import { EventHandler } from '../event-handler';
import { EventBroadcaster } from '../event-broadcaster';
import { OptionalEvent } from '../optional-event';

export class OnEventBroadcasterChangedEvent implements Event {
  public constructor(public broadcaster: EventBroadcaster) {}

  public accept(handler: EventHandler): OptionalEvent {
    return handler.handleOnEventBroadcasterChangedEvent(this);
  }
}
