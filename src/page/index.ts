import { Portfolio } from "../model/portfolio";
import { PageHeader } from "./about/about";
import { PageTimeline } from "./timeline/timeline";
import { PageElement } from "../framework/page-element";
import { PageImageViewer } from "./image-viewer/image-viewer";
import { PageFooter } from "./footer/footer";
import { PageBackground } from "./background/background";

export const create = (portfolio: Portfolio) => {
  const { config, header, timeline, footer } = portfolio;

  document.title = header.name;

  const pageElements: Array<PageElement> = [
    new PageBackground(0.1, 10, 70, 0.6, "#fff9e0aa"),
    new PageBackground(0.15, 15, 40, 0.5, "#ffd6d6aa"),
    new PageHeader(header, config.aPictureOf),
    new PageTimeline(timeline, config.showMore, config.showLess),
    new PageFooter(footer, config.cvName),
    new PageImageViewer()
  ];
  document.body.append(...pageElements.map(e => e.getElement()));
  pageElements.forEach(e => e.onAfterLoad(document.body));
};
