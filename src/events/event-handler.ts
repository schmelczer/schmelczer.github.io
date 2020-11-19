import { Event } from './event';
import { OnLoadEvent } from './concrete-events/on-load-event';

import { OnPageThemeChangedEvent } from './concrete-events/on-page-theme-changed-event';
import { OnEventBroadcasterChangedEvent } from './concrete-events/on-event-broadcaster-changed-event';
import { OptionalEvent } from './optional-event';

export abstract class EventHandler {
  public handle(event: Event): OptionalEvent {
    return event.accept(this);
  }

  public handleOnLoadEvent(event: OnLoadEvent): OptionalEvent {
    return event;
  }

  public handleOnEventBroadcasterChangedEvent(
    event: OnEventBroadcasterChangedEvent
  ): OptionalEvent {
    return event;
  }

  public handleOnPageThemeChangedEvent(event: OnPageThemeChangedEvent): OptionalEvent {
    return event;
  }
}
