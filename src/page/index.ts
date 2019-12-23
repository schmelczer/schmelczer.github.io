import { Portfolio } from "../model/portfolio";
import { PageElement } from "../framework/page-element";
import { PageBackground } from "./background/background";
import { PageHeader } from "./about/about";
import { PageTimeline } from "./timeline/timeline";
import { PageFooter } from "./footer/footer";
import { PageImageViewer } from "./image-viewer/image-viewer";

export const create = ({ config, header, timeline, footer }: Portfolio) => {
  document.title = header.name;

  const pageElements: Array<PageElement> = [
    new PageBackground(0.1, 200, 140, 0.4, "#fff9e0aa", -15),
    new PageBackground(0.15, 300, 80, 0.3, "#ffd6d6aa", -10),
    new PageHeader(header, config.aPictureOf),
    new PageTimeline(timeline, config.showMore, config.showLess),
    new PageFooter(footer, config.cvName),
    new PageImageViewer()
  ];

  const root = document.body.querySelector("main");
  root.append(...pageElements.map(e => e.getElement()));
  pageElements.forEach(e => e.onAfterLoad(root));
};
