import { PageElement } from '../page-element';
import { Blob } from './blob';
import { generate } from './background.html';

import { Vec3 } from './vec3';
import { Vec2 } from './vec2';
import { createElement } from '../../helper/create-element';
import { sum } from '../../helper/sum';
import { getHeight } from '../../helper/get-height';
import { OnLoadEvent } from '../../events/concrete-events/on-load-event';
import { OptionalEvent } from '../../events/optional-event';
import { OnPageThemeChangedEvent } from '../../events/concrete-events/on-page-theme-changed-event';

export class PageBackground extends PageElement {
  public static readonly blobSpacing = 325;
  public static readonly minBlobCount = 30;
  public static readonly perspective = 5;
  public static readonly zMin = 10;
  public static readonly zMax = 30;

  private backgroundSize: Vec2;
  private scrollPosition = 0;
  private previousTimestamp: DOMHighResTimeStamp = null;
  private readonly blobs: Array<Blob> = [];
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private parent: PageElement;

  public constructor(
    private readonly start: PageElement,
    private readonly inBetween: Array<PageElement>,
    private readonly end: PageElement
  ) {
    super(createElement(generate()));
    this.canvas = this.htmlRoot as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');
  }

  public handleOnLoadEvent(event: OnLoadEvent): OptionalEvent {
    this.parent = event.parent;
    requestAnimationFrame(this.draw.bind(this));
    return super.handleOnLoadEvent(event);
  }

  public handleOnPageThemeChangedEvent(event: OnPageThemeChangedEvent): OptionalEvent {
    Blob.changeTheme(event.isDark);
    this.blobs.forEach(b => b.decideColor());
    return super.handleOnPageThemeChangedEvent(event);
  }

  private createBlobs() {
    const requiredBlobCount = Math.max(
      PageBackground.minBlobCount,
      (this.backgroundSize.x * this.backgroundSize.y) / PageBackground.blobSpacing ** 2
    );

    while (requiredBlobCount > this.blobs.length) {
      this.blobs.push(new Blob());
    }
  }

  private resizeCanvas() {
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
  }

  private resizeBackground() {
    const targetWidth = this.parent.htmlRoot.clientWidth;

    const siblings: Array<HTMLElement> = this.getSiblings();
    const targetHeight = sum(siblings.map(getHeight));

    if (targetWidth === this.canvas.width && targetHeight === this.canvas.height) {
      return;
    }

    const targetSize = new Vec2(targetWidth, targetHeight);
    this.backgroundSize = targetSize;

    this.blobs.forEach(blob => {
      const variableOffset = (offset, q) =>
        Math.max(
          0,
          offset -
            ((blob.z - PageBackground.zMin) /
              (PageBackground.zMax - PageBackground.zMin)) *
              offset *
              q
        );
      const topOffset = variableOffset(getHeight(this.start.htmlRoot), 1);
      const topLeft = this.convertFrom2Dto3D(new Vec2(0, topOffset), blob.z);

      const bottomOffset = variableOffset(getHeight(this.end.htmlRoot), 0.2);
      const bottomRight = this.convertFrom2Dto3D(
        new Vec2(this.canvas.width, this.canvas.height - bottomOffset),
        blob.z,
        targetSize.y - this.canvas.height
      );

      blob.positionOffset = topLeft;
      blob.positionScale = bottomRight.subtract(topLeft);
    });
  }

  private getSiblings(): Array<HTMLElement> {
    return [this.start, ...this.inBetween, this.end].map(e => e.htmlRoot);
  }

  private draw(timestamp: DOMHighResTimeStamp) {
    this.resizeCanvas();
    this.resizeBackground();
    this.createBlobs();

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const deltaTime = this.getDeltaTime(timestamp);
    this.blobs.forEach(b => b.step(deltaTime));

    this.scrollPosition = this.parent.htmlRoot.scrollTop;

    this.blobs.sort((b1, b2) => b2.z - b1.z);

    this.blobs.forEach(blob => {
      const topLeft = this.convertFrom3Dto2D(blob.topLeft);
      const bottomRight = this.convertFrom3Dto2D(
        blob.topLeft.add(Vec3.from(blob.size, 0))
      );

      if (this.isInView(topLeft, bottomRight)) {
        blob.draw(this.ctx, topLeft, bottomRight.subtract(topLeft));
      }
    });

    requestAnimationFrame(this.draw.bind(this));
  }

  private getDeltaTime(timestamp: DOMHighResTimeStamp): number {
    const deltaTime = this.previousTimestamp ? timestamp - this.previousTimestamp : 0;
    this.previousTimestamp = timestamp;
    return Math.max(0, deltaTime);
  }

  private convertFrom3Dto2D(p: Vec3): Vec2 {
    const m = PageBackground.perspective / (PageBackground.perspective + p.z);
    return new Vec2(m * (p.z / 2 + p.x), m * (p.z / 2 + p.y - this.scrollPosition));
  }

  private convertFrom2Dto3D(p: Vec2, z: number, scrollPosition = 0): Vec2 {
    const m = 1 + z / PageBackground.perspective;
    return new Vec2(p.x * m - z / 2, p.y * m - z / 2 + scrollPosition);
  }

  private isInView(topLeft: Vec2, bottomRight: Vec2): boolean {
    return (
      ((0 <= topLeft.x && topLeft.x <= this.canvas.width) ||
        (0 <= bottomRight.x && bottomRight.x < this.canvas.width)) &&
      ((0 <= topLeft.y && topLeft.y <= this.canvas.height) ||
        (0 <= bottomRight.y && bottomRight.y <= this.canvas.height))
    );
  }
}
