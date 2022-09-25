import { createElement } from '../../helper/create-element';
import { titleToFragment } from '../../helper/title-to-fragment';
import { PageElement } from '../page-element';
import { TimelineElementParameters } from './timeline-element-parameters';
import { generate } from './timeline-element.html';

export class TimelineElement extends PageElement {
  private isOpen = false;
  private more: HTMLElement;

  public constructor(
    private timelineElement: TimelineElementParameters,
    private readonly showMore: string,
    private readonly showLess: string
  ) {
    super(createElement(generate(timelineElement, showMore)));
    this.more = this.query('.more');
    addEventListener('resize', this.handleResize.bind(this));

    this.query('.info-button').addEventListener('click', this.toggleOpen.bind(this));

    this.attachElementByReplacing(
      '.figure',
      timelineElement.figure instanceof PageElement
        ? timelineElement.figure
        : new PageElement(createElement(timelineElement.figure))
    );
  }

  protected initialize(): void {
    super.initialize();

    if (titleToFragment(this.timelineElement.title) === window.location.hash) {
      this.openMore();
    }
  }

  private toggleOpen() {
    if (this.isOpen) {
      this.closeMore();
    } else {
      this.openMore();
    }
  }

  private openMore() {
    this.isOpen = true;

    this.query('.info-button > p').innerText = this.showLess;

    const deltaHeight = this.more.scrollHeight;
    this.more.style.height = `${deltaHeight.toString()}px`;
  }

  private closeMore() {
    this.isOpen = false;

    this.query('.info-button > p').innerText = this.showMore;

    this.more.style.height = '0';
  }

  private handleResize() {
    if (this.isOpen) {
      this.more.style.height = 'auto';
      this.openMore();
    }
  }
}
