import { TimelineElement } from "../../../../model/portfolio";
import { PageContent } from "../../content/content";
import { PageElement } from "../../../../framework/page-element";
import { createElement } from "../../../../framework/element-factory";
import { generate } from "./timeline-element.html";

export class PageTimelineElement extends PageElement {
  private isOpen;
  private more: HTMLElement;

  public constructor(
    timelineElement: TimelineElement,
    showMore: string,
    showLess: string
  ) {
    const root = createElement(generate(timelineElement, showMore, showLess));

    if (timelineElement.more) {
      const content = new PageContent(timelineElement.more);
      super([content]);
      this.isOpen = false;
      this.more = root.querySelector("#more");
      this.more.appendChild(content.getElement());
      window.addEventListener("resize", this.handleResize.bind(this));
      root
        .querySelector(".buttons")
        .addEventListener("click", this.toggleOpen.bind(this));
    } else super();
    this.setElement(root);
  }

  private toggleOpen() {
    const showMore = this.getElement().querySelector(
      "#show-more"
    ) as HTMLElement;
    const showLess = this.getElement().querySelector(
      "#show-less"
    ) as HTMLElement;
    if (this.isOpen) {
      this.more.style.height = "0";
      PageTimelineElement.show(showMore);
      PageTimelineElement.hide(showLess);
    } else {
      this.openMoreToFullHeight();
      PageTimelineElement.hide(showMore);
      PageTimelineElement.show(showLess);
    }

    this.isOpen = !this.isOpen;
  }

  private static hide(element: HTMLElement) {
    element.style.opacity = "0";
    setTimeout(() => (element.style.visibility = "hidden"), 350);
  }

  private static show(element: HTMLElement) {
    element.style.visibility = "visible";
    element.style.opacity = "1";
  }

  private openMoreToFullHeight() {
    this.more.style.height = `${this.more.scrollHeight.toString()}px`;
  }

  private handleResize() {
    if (this.isOpen) {
      this.more.style.height = "auto";
      setTimeout(this.openMoreToFullHeight.bind(this), 200);
    }
  }
}
