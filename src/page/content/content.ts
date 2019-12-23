import { Content, TypedContent } from "../../model/content";
import "./content.scss";
import { PageElement } from "../../framework/page-element";
import { createElement } from "../../framework/element-factory";

export class PageContent extends PageElement {
  private static isTyped(content): content is TypedContent {
    return (content as TypedContent).type !== undefined;
  }

  public constructor(content: Content) {
    super();

    this.setElement(
      createElement(`
        <div class="content">
            ${content
              .map(element => {
                if (PageContent.isTyped(element)) {
                  if (element.type === "a") {
                    return `<a href="${element.href}" target="_blank"> ${element.text} </a>`;
                  }
                  if (element.type === "video") {
                    return `<video controls><source src="${element.src}" /></video>`;
                  }
                  throw new Error("Unhandled type.");
                }
                return `<p>${element}</p>`;
              })
              .join("\n")}
        </div>
      `)
    );
  }
}
