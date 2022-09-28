import { titleToFragment } from '../../helper/title-to-fragment';
import { BorderedImage } from '../figure/bordered-image/bordered-image';
import { ImageViewer } from '../image-viewer/image-viewer';
import { PageElement } from '../page-element';
import { TimelineElementParameters } from './timeline-element-parameters';
import { generate } from './timeline-element.html';

export class TimelineElement extends PageElement {
  private isOpen = false;
  private readonly more?: HTMLElement;

  public constructor(
    private timelineElement: TimelineElementParameters,
    private readonly showMore: string,
    private readonly showLess: string,
    imageViewer?: ImageViewer
  ) {
    super(generate(timelineElement, showMore));

    addEventListener('resize', this.handleResize.bind(this));

    this.more = this.query('.more');
    if (this.more) {
      this.query('.buttons > .image-button').addEventListener(
        'click',
        this.toggleOpen.bind(this)
      );
    }

    if (timelineElement.figure instanceof BorderedImage) {
      timelineElement.figure.imageViewer = imageViewer;
    }

    this.attachElementByReplacing('.figure', timelineElement.figure);
  }

  protected initialize(): void {
    super.initialize();

    if (titleToFragment(this.timelineElement.title) === window.location.hash) {
      setTimeout(this.openMore.bind(this), 100);
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
    if (!this.more) {
      return;
    }

    this.isOpen = true;

    this.query('.buttons > .image-button p').innerText = this.showLess;

    const deltaHeight = this.more.scrollHeight;
    this.more.style.height = `${deltaHeight.toString()}px`;
  }

  private closeMore() {
    if (!this.more) {
      return;
    }

    this.isOpen = false;

    this.query('.buttons > .image-button p').innerText = this.showMore;

    this.more.style.height = '0';
  }

  private handleResize() {
    if (!this.more) {
      return;
    }

    if (this.isOpen) {
      this.more.style.height = 'auto';
      setTimeout(this.openMore.bind(this), 100);
    }
  }
}
