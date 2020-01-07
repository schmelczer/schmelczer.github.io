import { Portfolio } from '../model/portfolio';
import { PageBackground } from './background/background';
import { PageHeader } from './about/about';
import { PageTimeline } from './timeline/timeline';
import { PageFooter } from './footer/footer';
import { PageImageViewer } from './image-viewer/image-viewer';
import { ContainerPage } from '../framework/container-page';

export const create = ({ header, timeline, footer }: Portfolio) => {
  const pageHeader = new PageHeader(header);
  const pageFooter = new PageFooter(footer);

  new ContainerPage(document.body, [
    new PageImageViewer(),
    new ContainerPage(document.body.querySelector('.main'), [
      pageHeader,
      new PageTimeline(timeline),
      pageFooter,
      new PageBackground(pageHeader, pageFooter),
    ]),
  ]).setAsMain();
};
