export class PageEvent {
  type: PageEventType;
  data?: any;
}

export enum PageEventType {
  onLoad,
  onBodyDimensionsChanged,
  eventBroadcasterChanged,
  pageThemeChanged,
}
