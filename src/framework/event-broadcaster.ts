import { PageEvent } from './page-event';

export interface EventBroadcaster {
  broadcastEvent(event: PageEvent, parent?: EventBroadcaster);
}
