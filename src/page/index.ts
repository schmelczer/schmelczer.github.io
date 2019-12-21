import { Portfolio } from "../model/portfolio";
import { PageHeader } from "./about/about";
import { PageTimeline } from "./timeline/timeline";
import { PageElement } from "../framework/page-element";
import { PageImageViewer } from "./image-viewer/image-viewer";
import { PageFooter } from "./footer/footer";

export const create = (portfolio: Portfolio) => {
  const { config, header, timeline, footer } = portfolio;

  document.title = header.name;

  const pageElements: Array<PageElement> = [
    new PageHeader(header, config.aPictureOf),
    new PageTimeline(timeline, config.showMore, config.showLess),
    new PageFooter(footer, config.cvName),
    new PageImageViewer()
  ];
  document.body.append(...pageElements.map(e => e.getElement()));
  pageElements.forEach(e => e.onAfterLoad(document.body));
};
