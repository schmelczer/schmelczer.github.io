import { PageElement } from "../../framework/page-element";
import { createElement } from "../../framework/element-factory";
import { generate } from "./main.html";
import { Portfolio } from "../../model/portfolio";
import { PageHeader } from "./about/about";
import { PageTimeline } from "./timeline/timeline";
import { PageFooter } from "./footer/footer";
import { PageImageViewer } from "./image-viewer/image-viewer";

export class PageMain extends PageElement {
  constructor({ config, header, timeline, footer }: Portfolio) {
    const root = createElement(generate());

    const pageElements: Array<PageElement> = [
      new PageHeader(header, config.aPictureOf),
      new PageTimeline(timeline, config.showMore, config.showLess),
      new PageFooter(footer, config.cvName),
      new PageImageViewer()
    ];

    root.append(...pageElements.map(e => e.getElement()));
    super(pageElements);
    this.setElement(root);
  }
}
