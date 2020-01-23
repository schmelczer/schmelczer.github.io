import { TimelineElement } from '../../../model/portfolio';
import { PageContent } from '../../content/content';
import { PageElement } from '../../../framework/page-element';
import { generate } from './timeline-element.html';
import { createElement } from '../../../framework/helper/create-element';
import { OnBodyDimensionsChangedEvent } from '../../../framework/events/concrete-events/on-body-dimensions-changed-event';

export class PageTimelineElement extends PageElement {
  private isOpen: boolean;
  private more: HTMLElement;

  public constructor(
    timelineElement: TimelineElement,
    showMore: string,
    showLess: string
  ) {
    const root = createElement(generate(timelineElement, showMore, showLess));

    if (timelineElement.more) {
      const content = new PageContent(timelineElement.more);
      super(root, [content]);
      this.isOpen = false;
      this.more = root.querySelector('.more');
      this.more.appendChild(content.element);
      window.addEventListener('resize', this.handleResize.bind(this));
      root
        .querySelector('.buttons')
        .addEventListener('click', this.toggleOpen.bind(this));
    } else super(root);
  }

  private toggleOpen() {
    const showMore = this.query('.show-more') as HTMLElement;
    const showLess = this.query('.show-less') as HTMLElement;
    if (this.isOpen) {
      PageTimelineElement.show(showMore);
      PageTimelineElement.hide(showLess);
      this.closeMore();
    } else {
      PageTimelineElement.show(showLess);
      PageTimelineElement.hide(showMore);
      this.openMore();
    }

    this.isOpen = !this.isOpen;
  }

  private notifyOfHeightChange(deltaHeight: number = undefined) {
    this.eventBroadcaster?.broadcastEvent(
      new OnBodyDimensionsChangedEvent(deltaHeight)
    );

    setTimeout(
      () =>
        this.eventBroadcaster?.broadcastEvent(
          new OnBodyDimensionsChangedEvent()
        ),
      250
    );
  }

  private static hide(element: HTMLElement) {
    element.style.opacity = '0';
    setTimeout(() => {
      element.style.visibility = 'hidden';
    }, 250);
  }

  private static show(element: HTMLElement) {
    element.style.visibility = 'visible';
    element.style.opacity = '1';
  }

  private openMore() {
    const deltaHeight = this.more.scrollHeight;
    this.more.style.height = `${deltaHeight.toString()}px`;
    this.notifyOfHeightChange(deltaHeight);
  }

  private closeMore() {
    const deltaHeight = this.more.scrollHeight;
    this.more.style.height = '0';
    this.notifyOfHeightChange(-deltaHeight);
  }

  private handleResize() {
    if (this.isOpen) {
      this.more.style.height = 'auto';
      setTimeout(this.openMore.bind(this), 200);
    }
  }
}
