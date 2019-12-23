import { createElement } from "../../../framework/element-factory";
import { PageElement } from "../../../framework/page-element";

import { generate } from "./image-viewer.html";

export class PageImageViewer extends PageElement {
  public constructor() {
    super();
    const root = createElement(generate());
    (root.querySelector("#cancel") as HTMLElement).onclick = () =>
      PageImageViewer.hide(root);
    this.setElement(root);
  }

  public onAfterLoad(parent: HTMLElement) {
    super.onAfterLoad(parent);

    document.body.addEventListener("keydown", this.handleKeydown.bind(this));

    const images = Array.prototype.slice.call(parent.querySelectorAll("img"));
    images
      .filter(
        (img: HTMLImageElement) => img.parentElement !== this.getElement()
      )
      .forEach(
        (img: HTMLImageElement) => (img.onclick = this.handleClick.bind(this))
      );
  }

  private handleClick(event: Event) {
    (this.getElement().querySelector(
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
