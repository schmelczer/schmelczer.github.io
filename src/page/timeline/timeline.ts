import { TimelineElement } from '../../model/portfolio';
import { PageElement } from '../../framework/page-element';
import { PageTimelineElement } from './timeline-element/timeline-element';
import { generate } from './timeline.html';
import { createElement } from '../../framework/helper/create-element';

export class PageTimeline extends PageElement {
  public constructor(
    timeline: Array<TimelineElement>,
    showMore: string,
    showLess: string
  ) {
    const root = createElement(generate());
    const elements = timeline.map(
      e => new PageTimelineElement(e, showMore, showLess)
    );
    elements.map(e => e.getElement()).forEach(e => root.appendChild(e));
    super(elements);
    this.setElement(root);
  }
}
