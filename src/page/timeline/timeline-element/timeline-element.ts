import { TimelineElement } from '../../../types/portfolio';
import { PageContent } from '../../content/content';
import { PageElement } from '../../page-element';
import { generate } from './timeline-element.html';
import { createElement } from '../../../helper/create-element';
import { OnBodyDimensionsChangedEvent } from '../../../events/concrete-events/on-body-dimensions-changed-event';

export class PageTimelineElement extends PageElement {
  private isOpen: boolean;
  private more: HTMLElement;
  private showMore: string;
  private showLess: string;

  public constructor(
    timelineElement: TimelineElement,
    showMore: string,
    showLess: string
  ) {
    const root = createElement(generate(timelineElement, showMore));

    if (timelineElement.more) {
      const content = new PageContent(timelineElement.more);
      super(root);
      this.children = [content];
      this.isOpen = false;
      this.more = root.querySelector('.more');
      this.more.appendChild(content.htmlRoot);
      addEventListener('resize', this.handleResize.bind(this));

      this.query('.info-button').addEventListener('click', this.toggleOpen.bind(this));
    } else super(root);

    this.attachElementByReplacing('.figure', timelineElement.figure);
    this.attachElementByReplacing('.description', timelineElement.description);
    timelineElement.links.forEach(l => this.attachElementAsChildOf('.buttons', l));

    this.showMore = showMore;
    this.showLess = showLess;
  }

  private toggleOpen() {
    if (this.isOpen) {
      this.query('.info-button p').innerText = this.showMore;
      this.closeMore();
    } else {
      this.query('.info-button p').innerText = this.showLess;
      this.openMore();
    }

    this.isOpen = !this.isOpen;
  }

  private notifyOfHeightChange(deltaHeight: number = undefined) {
    this.eventBroadcaster?.broadcastEvent(new OnBodyDimensionsChangedEvent(deltaHeight));
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
      this.openMore.bind(this);
    }
  }
}
