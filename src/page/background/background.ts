import { PageElement } from '../../framework/page-element';
import { PageEvent, PageEventType } from '../../framework/page-event';
import { createElement } from '../../framework/helper/create-element';
import { Blob } from './blob';
import { generate } from './background.html';
import { Random } from '../../framework/helper/random';
import { getHeight } from '../../framework/helper/get-height';
import { sum } from '../../framework/helper/sum';

export class PageBackground extends PageElement {
  private readonly blobs: Array<Blob> = [];
  private readonly blobSpacing = 350;

  public constructor(private start: PageElement, private end: PageElement) {
    super(createElement(generate()));
    Blob.initialize(10, 30, 5);
  }

  protected handleEvent(event: PageEvent, parent: PageElement) {
    if (event.type === PageEventType.onLoad) {
      this.bindListeners(parent);
    } else if (event.type === PageEventType.onBodyDimensionsChanged) {
      this.resize(parent, event.data?.deltaHeight);
    }
  }

  private bindListeners(parent: PageElement) {
    window.addEventListener('resize', () => this.resize(parent));
    window.addEventListener('load', () => this.resize(parent));
    parent.element.addEventListener(
      'scroll',
      () => (this.element.scrollTop = parent.element.scrollTop)
    );
  }

  private resize(parent: PageElement, heightChange?: number) {
    const siblings: Array<HTMLElement> = this.getSiblings(parent);

    const width = parent.element.clientWidth;
    let height = sum(siblings.map(getHeight));
    if (heightChange) {
      height += heightChange;
    }

    this.query('#background').style.width = `${width}px`;
    this.query('#background').style.height = `${height}px`;

    const requiredBlobCount = Math.round(
      (width * height) / this.blobSpacing ** 2
    );

    while (requiredBlobCount > this.blobs.length) {
      const blob = new Blob();
      this.query('#background').appendChild(blob.htmlElement);
      this.blobs.push(blob);
    }

    const random = new Random(2662);

    this.blobs.forEach((b, i) => {
      if (i >= requiredBlobCount) {
        b.hide();
      } else {
        b.transform(
          random,
          width,
          parent.element.clientHeight,
          height,
          getHeight(this.start.element),
          getHeight(this.end.element)
        );
        b.show();
      }
    });
  }

  private getSiblings(parent: PageElement): Array<HTMLElement> {
    return Array.prototype.slice
      .call(parent.element.children)
      .filter(e => e !== this.element);
  }
}
