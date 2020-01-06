import { Timeline } from '../../model/portfolio';
import { PageElement } from '../../framework/page-element';
import { PageTimelineElement } from './timeline-element/timeline-element';
import { generate } from './timeline.html';
import { createElement } from '../../framework/helper/create-element';
import { ContainerPage } from '../../framework/container-page';

export class PageTimeline extends ContainerPage {
  public constructor({ elements, showMoreText, showLessText }: Timeline) {
    super(
      createElement(generate()),
      elements.map(e => new PageTimelineElement(e, showMoreText, showLessText))
    );
  }
}
