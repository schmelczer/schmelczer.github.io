import { Portfolio } from "../model/portfolio";
import { PageBackground } from "./background/background";
import { PageHeader } from "./about/about";
import { PageTimeline } from "./timeline/timeline";
import { PageFooter } from "./footer/footer";
import { PageImageViewer } from "./image-viewer/image-viewer";
import { Page } from "../framework/page";

export const create = ({ config, header, timeline, footer }: Portfolio) => {
  document.title = header.name;
  new Page(
    [
      new PageImageViewer(),
      new Page(
        [
          new PageBackground(),
          new PageHeader(header, config.aPictureOf),
          new PageTimeline(timeline, config.showMore, config.showLess),
          new PageFooter(footer)
        ],
        document.body.querySelector("main"),
        false
      )
    ],
    document.body,
    true
  );
};
