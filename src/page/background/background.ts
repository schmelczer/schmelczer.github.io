import { getHeight } from '../../helper/get-height';
import { mix } from '../../helper/mix';
import { Random } from '../../helper/random';
import { sum } from '../../helper/sum';
import { PageElement } from '../page-element';
import { generate } from './background.html';

export class Background extends PageElement {
  private static readonly perspective = 5;
  private static readonly zMin = 6;
  private static readonly zMax = 50;
  private static readonly minHeight = 360;
  private static readonly maxHeight = 740;
  private static readonly minBlobCount = 30;
  private static readonly blobCountScaler = 0.05;
  private static readonly stableSeed = 50;

  private random = new Random();
  private stableRandom = new Random();
  private blobs: Array<HTMLElement> = [];
  private windowHeight = 0;
  private contentHeight = 0;

  public constructor(
    private readonly topOffsetElementCount: number,
    private readonly bottomOffsetElementCount: number
  ) {
    super(generate());
  }

  protected initialize() {
    super.initialize();
    this.drawIfNecessary();
  }

  private maintainBlobCount() {
    const targetCount = Math.max(
      Background.minBlobCount,
      Math.ceil(window.innerWidth * Background.blobCountScaler)
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
    const z = this.random.inInterval(Background.zMin, Background.zMax);
    const endXSpan =
      ((1 / Background.perspective) * (Background.zMax + Background.perspective)) / 2;

    const x = this.stableRandom.inInterval(
      mix(0, -(endXSpan - 0.5), z / Background.zMax),
      mix(1, 1 + endXSpan - 0.5, z / Background.zMax)
    );

    blob.style.left = `${x * 100}%`;
    blob.style.zIndex = (-z).toFixed(0);
    blob.style.opacity = (
      1 -
      (z - Background.zMin) / (Background.zMax - Background.zMin)
    ).toString();
    blob.style.height = `${this.random.inInterval(
      Background.minHeight,
      Background.maxHeight
    )}px`;

    return blob;
  }

  private drawIfNecessary() {
    const siblings = this.getSiblings();
    const currentContentHeight = sum(siblings.map(getHeight));

    if (
      window.innerHeight !== this.windowHeight ||
      currentContentHeight !== this.contentHeight
    ) {
      this.windowHeight = window.innerHeight;
      this.contentHeight = currentContentHeight;
      this.maintainBlobCount();

      this.randomizeBlobs(
        sum(siblings.slice(0, this.topOffsetElementCount).map(getHeight)),
        sum(siblings.slice(-this.bottomOffsetElementCount).map(getHeight))
      );
    }

    requestAnimationFrame(this.drawIfNecessary.bind(this));
  }

  private getSiblings(): Array<HTMLElement> {
    return Array.prototype.slice
      .call(this.htmlRoot.parentElement!.childNodes)
      .filter((n: HTMLElement) => n !== this.htmlRoot);
  }

  private randomizeBlobs(topOffset: number, bottomOffset: number) {
    this.stableRandom.seed = Background.stableSeed;
    this.blobs.forEach((b) => {
      const z = -parseFloat(b.style.zIndex);
      const y = this.getRandomYInSafeArea(
        z,
        topOffset,
        bottomOffset,
        parseFloat(b.style.height)
      );

      b.style.transform = `translate3D(0, ${y}px, ${-z}px) rotate(-20deg)`;
    });
  }

  private getRandomYInSafeArea(
    z: number,
    topOffset: number,
    bottomOffset: number,
    height: number
  ): number {
    const farTop = -(
      ((this.windowHeight / 2 - topOffset) / Background.perspective) *
        (Background.zMax + Background.perspective) -
      this.windowHeight / 2
    );

    const farBottom = Math.min(
      ((this.windowHeight / 2 - bottomOffset) / Background.perspective) *
        (Background.zMax + Background.perspective) -
        this.windowHeight / 2 +
        this.contentHeight,
      this.contentHeight - height
    );

    return this.stableRandom.inInterval(
      mix(topOffset, farTop, z / Background.zMax),
      farBottom
    );
  }
}
