import { createElement } from '../../helper/create-element';
import { PageElement } from '../page-element';
import { PageTimelineElement } from './timeline-element/timeline-element';
import { TimelineElementParameters } from './timeline-element/timeline-element-parameters';
import { generate } from './timeline.html';

export class PageTimeline extends PageElement {
  public constructor({
    elements,
    showMoreText,
    showLessText,
  }: {
    showMoreText: string;
    showLessText: string;
    elements: Array<TimelineElementParameters>;
  }) {
    super(createElement(generate()));
    elements.forEach((e) =>
      this.attachElement(new PageTimelineElement(e, showMoreText, showLessText))
    );
  }
}
