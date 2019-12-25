import { PageElement } from "../../framework/page-element";

import { generate } from "./image-viewer.html";
import { createElement } from "../../framework/helper";
import { PageEvent, PageEventType } from "../../framework/page-event";

export class PageImageViewer extends PageElement {
  public constructor() {
    super();
    const root = createElement(generate());
    (root.querySelector("#cancel") as HTMLElement).onclick = () =>
      PageImageViewer.hide(root);
    this.setElement(root);
  }

  protected handleEvent(event: PageEvent, parent: PageElement) {
    if (event.type !== PageEventType.onLoad) {
      return;
    }

    document.body.addEventListener("keydown", this.handleKeydown.bind(this));

    const images = Array.prototype.slice.call(
      parent.getElement().querySelectorAll("img")
    );
    images
      .filter(
        (img: HTMLImageElement) => img.parentElement !== this.getElement()
      )
      .forEach(
        (img: HTMLImageElement) => (img.onclick = this.handleClick.bind(this))
      );
  }

  private handleClick(event: Event) {
    (this.query(
      "#photo"
    ) as HTMLImageElement).src = (event.target as HTMLImageElement).src;

    PageImageViewer.show(this.getElement());
  }

  private handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      PageImageViewer.hide(this.getElement());
    }
  }

  private static show(e: HTMLElement) {
    e.style.display = "flex";
  }
  private static hide(e: HTMLElement) {
    e.style.display = "none";
  }
}
