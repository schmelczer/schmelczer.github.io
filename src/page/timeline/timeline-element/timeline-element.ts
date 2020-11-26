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
  more?: Array<string>;
  links: Array<PageElement>;
}

export class PageTimelineElement extends PageElement {
  private isOpen: boolean;
  private more?: HTMLElement;
  private showMore: string;
  private showLess: string;

  public constructor(
    timelineElement: TimelineElementParameters,
    showMore: string,
    showLess: string
  ) {
    const root = createElement(generate(timelineElement, showMore));

    if (timelineElement.more) {
      const content = new PageContent(timelineElement.more);
      super(root);
      this.children = [content];
      this.isOpen = false;
      this.more = this.query('.more');
      this.more.appendChild(content.htmlRoot);
      addEventListener('resize', this.handleResize.bind(this));

      this.query('.info-button').addEventListener('click', this.toggleOpen.bind(this));
    } else super(root);

    this.attachElementByReplacing('.figure', timelineElement.figure);
    this.query('.description').innerText = timelineElement.description;
    timelineElement.links.forEach(l => this.attachElementAsChildOf('.buttons', l));

    this.showMore = showMore;
    this.showLess = showLess;
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
