import { EventHandler } from './event-handler';
import { OptionalEvent } from './optional-event';

export interface Event {
  accept(handler: EventHandler): OptionalEvent;
}
