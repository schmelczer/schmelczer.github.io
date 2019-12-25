import { PageEvent, PageEventType } from "./page-event";

export abstract class PageElement {
  private element: HTMLElement;

  // Getter and setter accessors would have to agree in visibility
  public getElement(): HTMLElement {
    return this.element;
  }

  protected setElement(value: HTMLElement) {
    this.element = value;
  }

  protected eventGenerator: PageElement;

  protected constructor(private children: Array<PageElement> = []) {}

  public giveEvent(event: PageEvent, parent: PageElement = null) {
    if (event.type === PageEventType.eventGeneratorChanged) {
      this.eventGenerator = event.data;
    }
    this.handleEvent(event, parent);
    this.children.forEach(c => c.giveEvent(event, this));
  }

  protected query(query: string): HTMLElement | null {
    return this.getElement()?.querySelector(query);
  }

  protected handleEvent(event: PageEvent, parent: PageElement) {}
}
