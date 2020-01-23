import { Event } from '../event';
import { EventHandler } from '../event-handler';
import { PageElement } from '../../page-element';
import { OptionalEvent } from '../optional-event';

export class OnLoadEvent implements Event {
  public constructor(public parent: PageElement) {}

  public accept(handler: EventHandler): OptionalEvent {
    return handler.handleOnLoadEvent(this);
  }
}
