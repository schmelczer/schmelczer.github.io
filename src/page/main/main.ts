import { getHeight } from '../../helper/get-height';
import { mix } from '../../helper/mix';
import { Random } from '../../helper/random';
import { sum } from '../../helper/sum';
import { PageElement } from '../page-element';
import { generate } from './main.html';

export class Main extends PageElement {
  private static readonly perspective = 5;
  private static readonly zMin = 6;
  private static readonly zMax = 40;
  private static readonly minHeight = 360;
  private static readonly maxHeight = 740;
  private static readonly minBlobCount = 20;
  private static readonly blobCountScaler = 0.035;
  private static readonly stableSeed = 42551;

  private readonly topOffsetElementCount = 1;
  private readonly bottomOffsetElementCount = 1;

  private random = new Random();
  private stableRandom = new Random();
  private blobs: Array<HTMLElement> = [];
  private contentHeight = 0;

  constructor(...children: Array<PageElement | string>) {
    const actualChildren = children.map((c) =>
      c instanceof PageElement ? c : new PageElement(c)
    );

    super(generate(Main.perspective), actualChildren);

    actualChildren.forEach((c) => this.attachElement(c));
  }

  protected initialize() {
    super.initialize();
    this.maintainYPosition();
  }

  private maintainBlobCount() {
    const targetCount = Math.max(
      Main.minBlobCount,
      Math.ceil(window.innerWidth * Main.blobCountScaler)
    );
    const deltaCount = targetCount - this.blobs.length;

    for (let i = 0; i < deltaCount; i++) {
      const blob = this.createBlob();
      this.blobs.push(blob);
      this.htmlRoot.appendChild(blob);
    }
    for (let i = 0; i < -deltaCount; i++) {
      const blob = this.blobs.pop();
      this.htmlRoot.removeChild(blob!);
    }
  }

  private createBlob(): HTMLElement {
    const blob = document.createElement('div');
    blob.className = 'blob';

    const z = this.random.inInterval(Main.zMin, Main.zMax);
    const halfScreenWidthAtFarPlane = Main.zMax / Main.perspective / 2 + 0.5;

    const x = this.random.inInterval(
      mix(0, 0.5 - halfScreenWidthAtFarPlane, z / Main.zMax),
      mix(1, 0.5 + halfScreenWidthAtFarPlane, z / Main.zMax)
    );

    blob.style.left = `${x * 100}%`;
    blob.style.transform = `translate3D(-50%, 0, ${-z}px) rotate(-20deg)`;

    blob.style.zIndex = (-z).toFixed(0);
    blob.style.opacity = (1 - (z - Main.zMin) / (Main.zMax - Main.zMin)).toString();
    blob.style.height = `${this.random.inInterval(Main.minHeight, Main.maxHeight)}px`;

    return blob;
  }

  private maintainYPosition() {
    const siblings = Array.prototype.slice
      .call(this.htmlRoot.childNodes)
      .filter((n: HTMLElement) => !n.classList.contains('blob'));

    const viewHeight = getHeight(this.htmlRoot);
    const currentContentHeight = this.htmlRoot.scrollHeight / viewHeight;

    if (currentContentHeight !== this.contentHeight) {
      this.contentHeight = currentContentHeight;

      this.maintainBlobCount();

      const topOffset =
        sum(siblings.slice(0, this.topOffsetElementCount).map(getHeight)) / viewHeight;
      const bottomOffset =
        sum(siblings.slice(-this.bottomOffsetElementCount).map(getHeight)) / viewHeight;

      this.stableRandom.seed = Main.stableSeed;

      this.blobs.forEach((b) => {
        const y = this.stableRandom.inInterval(
          topOffset,
          this.contentHeight - bottomOffset - parseFloat(b.style.height) / viewHeight
        );

        b.style.top = `${y * 100}%`;
      });
    }

    requestAnimationFrame(this.maintainYPosition.bind(this));
  }
}
