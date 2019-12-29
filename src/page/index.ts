import { Portfolio } from "../model/portfolio";
import { PageBackground } from "./background/background";
import { PageHeader } from "./about/about";
import { PageTimeline } from "./timeline/timeline";
import { PageFooter } from "./footer/footer";
import { PageImageViewer } from "./image-viewer/image-viewer";
import { Page } from "../framework/page";

export const create = ({ config, header, timeline, footer }: Portfolio) => {
  const pageHeader = new PageHeader(header);
  const pageFooter = new PageFooter(footer);

  const bg = new PageBackground(pageHeader, pageFooter);
  new Page(
    [
      new PageImageViewer(),
      new Page(
        [
          pageHeader,
          new PageTimeline(timeline, config.showMore, config.showLess),
          pageFooter,
          bg
        ],
        document.body.querySelector("main"),
        false
      )
    ],
    document.body,
    true
  );
};
