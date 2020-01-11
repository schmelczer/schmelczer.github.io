import { Portfolio } from '../model/portfolio';
import { PageBackground } from './background/background';
import { PageHeader } from './about/about';
import { PageTimeline } from './timeline/timeline';
import { PageFooter } from './footer/footer';
import { PageImageViewer } from './image-viewer/image-viewer';
import { ContainerPage } from '../framework/container-page';

export const create = ({ header, timeline, footer }: Portfolio) => {
  const pageHeader = new PageHeader(header);
  const pageTimeline = new PageTimeline(timeline);
  const pageFooter = new PageFooter(footer);

  new ContainerPage(document.body, [
    new PageImageViewer(),
    pageHeader,
    pageTimeline,
    pageFooter,
    new PageBackground(pageHeader, [pageTimeline], pageFooter),
  ]).setAsMain();

  addSupportForTabNavigation();
  removeUnnecessaryOutlines();
};

const addSupportForTabNavigation = () =>
  (document.onkeydown = e => {
    if (e.key === ' ') {
      (document.activeElement as HTMLElement)?.click();
      e.preventDefault();
    }
  });

const removeUnnecessaryOutlines = () =>
  (document.onclick = e => {
    (e.target as HTMLElement)?.blur();
  });
