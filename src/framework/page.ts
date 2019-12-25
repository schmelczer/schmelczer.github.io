import { PageElement } from "./page-element";
import { PageEventType } from "./page-event";

export class Page extends PageElement {
  public constructor(
    children: Array<PageElement>,
    private rootElement: HTMLElement
  ) {
    super(children);
    this.setElement(rootElement);
    this.giveEvent(
      { type: PageEventType.eventGeneratorChanged, data: this },
      this
    );
    rootElement.append(...children.map(e => e.getElement()));
    this.giveEvent({ type: PageEventType.onLoad }, this);
  }
}
