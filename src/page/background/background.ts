import { PageElement } from '../page-element';
import { generate } from './background.html';

import { createElement } from '../../helper/create-element';
import { sum } from '../../helper/sum';
import { getHeight } from '../../helper/get-height';

import { mix } from '../../helper/mix';
import { Random } from '../../helper/random';

export class PageBackground extends PageElement {
  private static readonly perspective = 5;
  private static readonly zMin = 6;
  private static readonly zMax = 50;

  private random: Random = new Random();
  private blobs: Array<HTMLElement> = [];

  public constructor(
    private readonly topOffsetElementCount: number,
    private readonly bottomOffsetElementCount: number
  ) {
    super(createElement(generate()));

    for (let i = 0; i < window.innerWidth / 10; i++) {
      const blob = document.createElement('div');
      blob.classList.add('blob');
      blob.style.width = '140px';
      const z = this.random.inInterval(PageBackground.zMin, PageBackground.zMax);
      blob.style.zIndex = (-z).toFixed(0);
      blob.style.opacity = (
        1 -
        (z - PageBackground.zMin) / (PageBackground.zMax - PageBackground.zMin)
      ).toString();
      blob.style.height = `${this.random.inInterval(360, 740)}px`;
      this.blobs.push(blob);
      this.htmlRoot.appendChild(blob);
    }
  }

  private windowHeight = 0;
  private windowWidth = 0;
  private contentHeight = 0;
  private drawIfNecessary() {
    const siblings = this.getSiblings();
    const currentContentHeight = sum(siblings.map(getHeight));

    if (
      window.innerWidth !== this.windowWidth ||
      window.innerHeight !== this.windowHeight ||
      currentContentHeight !== this.contentHeight
    ) {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
      this.contentHeight = currentContentHeight;

      this.randomizeBlobs(
        sum(siblings.slice(0, this.topOffsetElementCount).map(getHeight)),
        sum(siblings.slice(-this.bottomOffsetElementCount).map(getHeight))
      );
    }

    requestAnimationFrame(this.drawIfNecessary.bind(this));
  }

  private parent?: HTMLElement;
  protected setParent(parent: PageElement) {
    this.parent = parent.htmlRoot;
    requestAnimationFrame(this.drawIfNecessary.bind(this));
    super.setParent(parent);
  }

  private getSiblings(): Array<HTMLElement> {
    return Array.prototype.slice
      .call(this.parent!.childNodes)
      .filter((n: HTMLElement) => n !== this.htmlRoot);
  }

  private randomizeBlobs(topOffset: number, bottomOffset: number) {
    this.random.seed = 50;
    this.blobs.forEach(b => {
      const z = -Number.parseInt(b.style.zIndex);
      const [x, y] = this.randomXY(z, topOffset, bottomOffset);
      b.style.transform = `translate3D(${x}px, ${y}px, ${-z}px) rotate(-20deg)`;
    });
  }

  private randomXY(z: number, topOffset: number, bottomOffset: number): [number, number] {
    const farTop = -(
      ((this.windowHeight / 2 - topOffset) / PageBackground.perspective) *
        (PageBackground.zMax + PageBackground.perspective) -
      this.windowHeight / 2
    );

    const farBottom =
      ((this.windowHeight / 2 - bottomOffset) / PageBackground.perspective) *
        (PageBackground.zMax + PageBackground.perspective) -
      this.windowHeight / 2 +
      this.contentHeight;

    const endXSpan =
      ((this.windowWidth / PageBackground.perspective) *
        (PageBackground.zMax + PageBackground.perspective)) /
      2;

    return [
      this.random.inInterval(
        mix(0, -(endXSpan - this.windowWidth / 2), z / PageBackground.zMax),
        mix(
          this.windowWidth,
          this.windowWidth + endXSpan - this.windowWidth / 2,
          z / PageBackground.zMax
        )
      ),
      this.random.inInterval(
        mix(topOffset, farTop, z / PageBackground.zMax),
        mix(this.contentHeight - bottomOffset, farBottom, z / PageBackground.zMax)
      ),
    ];
  }
}
