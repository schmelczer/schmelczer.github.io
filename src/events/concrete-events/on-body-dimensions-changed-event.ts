import { Event } from '../event';
import { EventHandler } from '../event-handler';
import { OptionalEvent } from '../optional-event';

export class OnBodyDimensionsChangedEvent implements Event {
  public constructor(public deltaHeight?: number) {}

  public accept(handler: EventHandler): OptionalEvent {
    return handler.handleOnBodyDimensionsChangedEvent(this);
  }
}
