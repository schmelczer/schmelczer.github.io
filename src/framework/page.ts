import { PageElement } from "./page-element";
import { PageEventType } from "./page-event";

export class Page extends PageElement {
  public constructor(
    children: Array<PageElement>,
    private rootElement: HTMLElement,
    isRootPage = false
  ) {
    super(children);
    this.setElement(rootElement);
    if (isRootPage) {
      this.broadcastEvent(
        { type: PageEventType.eventBroadcasterChanged, data: this },
        this
      );
    }

    rootElement.append(...children.map(e => e.getElement()).filter(e => e));

    if (isRootPage) {
      this.broadcastEvent({ type: PageEventType.onLoad }, this);
    }
  }
}
