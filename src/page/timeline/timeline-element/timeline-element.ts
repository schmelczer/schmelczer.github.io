import { createElement } from '../../../helper/create-element';
import { PageElement } from '../../page-element';
import { TimelineElementParameters } from './timeline-element-parameters';
import { generate } from './timeline-element.html';

export class PageTimelineElement extends PageElement {
  private isOpen = false;
  private more: HTMLElement;

  public constructor(
    timelineElement: TimelineElementParameters,
    private readonly showMore: string,
    private readonly showLess: string
  ) {
    super(createElement(generate(timelineElement, showMore)));
    this.isOpen = false;
    this.more = this.query('.more');
    addEventListener('resize', this.handleResize.bind(this));

    this.query('.info-button').addEventListener('click', this.toggleOpen.bind(this));
    this.attachElementByReplacing('.figure', timelineElement.figure);
    this.isOpen = false;
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

  private openMore() {
    const deltaHeight = this.more.scrollHeight;
    this.more.style.height = `${deltaHeight.toString()}px`;
  }

  private closeMore() {
    this.more.style.height = '0';
  }

  private handleResize() {
    if (this.isOpen) {
      this.more.style.height = 'auto';
      this.openMore.bind(this);
    }
  }
}
