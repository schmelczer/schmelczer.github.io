import { Content, TypedContent } from "../../model/content";
import "./content.scss";
import { PageElement } from "../../framework/page-element";
import { createElement, last } from "../../framework/helper";
import { html } from "../../model/misc";

export class PageContent extends PageElement {
  private static isTyped(content): content is TypedContent {
    return (content as TypedContent).type !== undefined;
  }

  public static parseTypedContent(
    element: TypedContent,
    disableInnerShadow?: boolean
  ): html {
    if (element.type === "a") {
      return `<a href="${element.href}" rel="noreferrer" target="_blank"> ${element.text} </a>`;
    }
    if (element.type === "video") {
      return `
          <video ${element.options}>
              <source src="${element.webm}" type="video/webm"/>
              <source src="${element.mp4}" type="video/mp4"/>
          </video>
      `;
    }
    if (element.type === "img") {
      return `
            ${!disableInnerShadow ? `<div class="image-container">` : ""}
                <img 
                    srcset="${element.image.srcSet}" 
                    src="${last(element.image.images).path}" 
                    alt="${element.alt}"
                />
            ${!disableInnerShadow ? `</div>` : ""}
      `;
    }

    throw new Error("Unhandled type.");
  }

  public constructor(content: Content) {
    super();

    this.setElement(
      createElement(`
        <div class="content">
            ${content
              .map(element =>
                PageContent.isTyped(element)
                  ? PageContent.parseTypedContent(element)
                  : `<p>${element}</p>`
              )
              .join("\n")}
        </div>
      `)
    );
  }
}
