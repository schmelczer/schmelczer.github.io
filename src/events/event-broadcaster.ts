import { Event } from './event';

export interface EventBroadcaster {
  broadcastEvent(event: Event): void;
}
