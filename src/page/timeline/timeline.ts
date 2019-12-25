import { TimelineElement } from "../../model/portfolio";
import { PageElement } from "../../framework/page-element";
import { PageTimelineElement } from "./timeline-element/timeline-element";
import { generate } from "./timeline.html";
import { createElement } from "../../framework/helper";

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
    root.append(...elements.map(e => e.getElement()));
    super(elements);
    this.setElement(root);
  }
}
