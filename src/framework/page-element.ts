import { PageEvent, PageEventType } from "./page-event";

export abstract class PageElement {
  private element: HTMLElement;

  // Getter and setter accessors would have to agree in visibility
  public getElement(): HTMLElement {
    return this.element;
  }

  protected setElement(value: HTMLElement) {
    this.getElement()?.parentElement?.replaceChild(value, this.getElement());
    this.element = value;
  }

  protected eventBroadcaster: PageElement;

  protected constructor(private children: Array<PageElement> = []) {}

  public broadcastEvent(event: PageEvent, parent: PageElement = null) {
    if (event.type === PageEventType.eventBroadcasterChanged) {
      this.eventBroadcaster = event.data;
    }
    this.handleEvent(event, parent);
    this.children.forEach(c => c.broadcastEvent(event, this));
  }

  protected query(query: string): HTMLElement | null {
    return this.getElement()?.querySelector(query);
  }

  protected handleEvent(event: PageEvent, parent: PageElement) {}
}
