import { Event } from '../event';
import { EventHandler } from '../event-handler';
import { OptionalEvent } from '../optional-event';

export class OnPageThemeChangedEvent implements Event {
  public constructor(public isDark: boolean) {}

  public accept(handler: EventHandler): OptionalEvent {
    return handler.handleOnPageThemeChangedEvent(this);
  }
}
