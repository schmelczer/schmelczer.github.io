import { PageContent } from '../../content/content';
import { PageElement } from '../../page-element';
import { generate } from './timeline-element.html';
import { createElement } from '../../../helper/create-element';
import { Video } from '../../basics/video/video';
import { Image } from '../../basics/image/image';
import { Preview } from '../../basics/preview/preview';

export interface TimelineElementParameters {
  date: string;
  figure: Image | Video | Preview;
  title: string;
  description: string;
  more: Array<string>;
  links: Array<PageElement>;
}

export class PageTimelineElement extends PageElement {
  private isOpen = false;
  private more: HTMLElement;

  public constructor(
    timelineElement: TimelineElementParameters,
    private readonly showMore: string,
    private readonly showLess: string
  ) {
    super(createElement(generate(timelineElement, showMore)));
    const content = new PageContent(timelineElement.more);
    this.children = [content];
    this.isOpen = false;
    this.more = this.query('.more');
    this.more.appendChild(content.htmlRoot);
    addEventListener('resize', this.handleResize.bind(this));

    this.query('.info-button').addEventListener('click', this.toggleOpen.bind(this));
    this.attachElementByReplacing('.figure', timelineElement.figure);
    this.query('.description').innerText = timelineElement.description;
    timelineElement.links.forEach((l) => this.attachElementAsChildOf('.buttons', l));

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
    const deltaHeight = this.more!.scrollHeight;
    this.more!.style.height = `${deltaHeight.toString()}px`;
  }

  private closeMore() {
    this.more!.style.height = '0';
  }

  private handleResize() {
    if (this.isOpen) {
      this.more!.style.height = 'auto';
      this.openMore.bind(this);
    }
  }
}
