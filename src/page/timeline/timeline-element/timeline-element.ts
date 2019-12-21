import { TimelineElement } from "../../../model/portfolio";
import { PageContent } from "../../content/content";
import "./timeline-element.scss";
import { PageElement } from "../../../framework/page-element";
import { createElement } from "../../../framework/element-factory";

export class PageTimelineElement extends PageElement {
  private isOpen;
  private more: HTMLElement;

  public constructor(
    { date, title, picture, description, more, link }: TimelineElement,
    showMore: string,
    showLess: string
  ) {
    const root = createElement(`
        <section class="timeline-element">
            <div class="line">
                <p class="date-wide-screen">${date}</p>
            </div>
            <div class="card">
                <h2>${title}</h2>
                <p class="date-narrow-screen">${date}</p>
                <img src="${picture}" alt="${picture}"/>
                <p class="description">${description}</p>
                ${
                  more
                    ? `
                    <div id="more"></div>
                    <div class="buttons">
                        <a id="show-more">${showMore}</a>
                        <a id="show-less">${showLess}</a>
                    </div>
                    `
                    : ""
                }
                ${
                  link
                    ? `
                    <a href="${link}" target="_blank">${link}</a>`
                    : ""
                }
            </div>
        </section>
    `);

    if (more) {
      const content = new PageContent(more);
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
      showMore.style.opacity = "1";
      showLess.style.opacity = "0";
    } else {
      this.openMoreToFullHeight();
      showMore.style.opacity = "0";
      showLess.style.opacity = "1";
    }

    this.isOpen = !this.isOpen;
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
