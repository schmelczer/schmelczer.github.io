import { Timeline } from '../../types/portfolio';
import { PageTimelineElement } from './timeline-element/timeline-element';
import { generate } from './timeline.html';
import { createElement } from '../../helper/create-element';
import { PageElement } from '../page-element';

export class PageTimeline extends PageElement {
  public constructor({ elements, showMoreText, showLessText }: Timeline) {
    super(createElement(generate()));
    elements.forEach(e =>
      this.attachElement(new PageTimelineElement(e, showMoreText, showLessText))
    );
  }
}
