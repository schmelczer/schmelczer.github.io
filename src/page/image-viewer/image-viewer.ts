import "./image-viewer.scss";
import cancel from "../../static/icons/cancel.svg";
import { html } from "../../model/misc";
import { createElement } from "../../framework/element-factory";
import { PageElement } from "../../framework/page-element";
import { hide, show } from "../../framework/helpers";

export class PageImageViewer extends PageElement {
  private static template: html = `
        <section class="photo-viewer">
            <img id="photo" alt="currently opened photo"/>
            <img id="cancel" src="${cancel}" alt="cancel"/>
        </section>
    `;

  public constructor() {
    super();
    const root = createElement(PageImageViewer.template);
    (root.querySelector("#cancel") as HTMLElement).onclick = () => hide(root);
    this.setElement(root);
  }

  public onAfterLoad(parent: HTMLElement) {
    super.onAfterLoad(parent);

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

    show(this.getElement());
  }
}
