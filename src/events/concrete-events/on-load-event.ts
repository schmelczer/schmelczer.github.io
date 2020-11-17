import { Event } from '../event';
import { EventHandler } from '../event-handler';
import { OptionalEvent } from '../optional-event';
import { PageElement } from '../../page/page-element';

export class OnLoadEvent implements Event {
  public constructor(public parent: PageElement) {}

  public accept(handler: EventHandler): OptionalEvent {
    return handler.handleOnLoadEvent(this);
  }
}
