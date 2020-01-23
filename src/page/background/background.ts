import { PageElement } from '../../framework/page-element';
import { Blob } from './blob';
import { generate } from './background.html';
import { Animation } from './animation';
import { Vec3 } from './vec3';
import { Vec2 } from './vec2';
import { createElement } from '../../framework/helper/create-element';
import { sum } from '../../framework/helper/sum';
import { getHeight } from '../../framework/helper/get-height';
import { OnLoadEvent } from '../../framework/events/concrete-events/on-load-event';
import { OnBodyDimensionsChangedEvent } from '../../framework/events/concrete-events/on-body-dimensions-changed-event';
import { OnPageThemeChangedEvent } from '../../framework/events/concrete-events/on-page-theme-changed-event';
import { OptionalEvent } from '../../framework/events/optional-event';

export class PageBackground extends PageElement {
  public static readonly BLOB_SPACING = 325;
  public static readonly MIN_BLOB_COUNT = 30;
  public static readonly PERSPECTIVE = 5;
  public static readonly Z_MIN = 10;
  public static readonly Z_MAX = 30;
  public static readonly ANIMATION_TIME = 250;

  private backgroundSize: Animation<Vec2>;
  private scrollPosition: number = 0;
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
    this.canvas = this.element as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');
  }

  public handleOnLoadEvent(event: OnLoadEvent): OptionalEvent {
    this.parent = event.parent;
    this.bindListeners();
    return super.handleOnLoadEvent(event);
  }

  public handleOnBodyDimensionsChangedEvent(
    event: OnBodyDimensionsChangedEvent
  ): OptionalEvent {
    this.resize(event.deltaHeight);
    return super.handleOnBodyDimensionsChangedEvent(event);
  }

  public handleOnPageThemeChangedEvent(
    event: OnPageThemeChangedEvent
  ): OptionalEvent {
    Blob.changeTheme(event.isDark);
    this.blobs.forEach(b => b.decideColor());
    return super.handleOnPageThemeChangedEvent(event);
  }

  private bindListeners() {
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('load', e => {
      this.resize();
      this.redraw(e.timeStamp);
    });
  }

  private resize(heightChange?: number) {
    this.resizeCanvas();
    this.resizeBackground(heightChange);
  }

  private resizeCanvas() {
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
  }

  private resizeBackground(heightChange?: number) {
    const targetWidth = this.parent.element.clientWidth;

    const siblings: Array<HTMLElement> = this.getSiblings();
    let targetHeight = sum(siblings.map(getHeight));
    if (heightChange) {
      targetHeight += heightChange;
    }

    const targetSize = new Vec2(targetWidth, targetHeight);

    this.backgroundSize = new Animation(
      this.backgroundSize ? this.backgroundSize.value : targetSize,
      targetSize,
      PageBackground.ANIMATION_TIME,
      (from: Vec2, to: Vec2, q: number): Vec2 =>
        new Vec2(from.x + q * (to.x - from.x), from.y + q * (to.y - from.y)),
      backgroundSize =>
        this.blobs.forEach(blob => {
          const variableOffset = (offset, q) =>
            Math.max(
              0,
              offset -
                ((blob.z - PageBackground.Z_MIN) /
                  (PageBackground.Z_MAX - PageBackground.Z_MIN)) *
                  offset *
                  q
            );
          const topOffset = variableOffset(getHeight(this.start.element), 1);
          const topLeft = this.convertFrom2Dto3D(
            new Vec2(0, topOffset),
            blob.z
          );

          const bottomOffset = variableOffset(getHeight(this.end.element), 0.2);

          const bottomRight = this.convertFrom2Dto3D(
            new Vec2(this.canvas.width, this.canvas.height - bottomOffset),
            blob.z,
            backgroundSize.y - this.canvas.height
          );

          blob.positionOffset = topLeft;
          blob.positionScale = bottomRight.subtract(topLeft);
        })
    );
  }

  private getSiblings(): Array<HTMLElement> {
    return [this.start, ...this.inBetween, this.end].map(e => e.element);
  }

  private redraw(timestamp: DOMHighResTimeStamp) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const deltaTime = this.getDeltaTime(timestamp);
    this.backgroundSize.step(deltaTime);
    this.blobs.forEach(b => b.step(deltaTime));

    this.scrollPosition = this.parent.element.scrollTop;
    const requiredBlobCount = this.requiredBlobCount;

    while (requiredBlobCount > this.blobs.length) {
      this.blobs.push(new Blob());
    }

    this.blobs.sort((b1, b2) => b2.z - b1.z);

    this.blobs.forEach((blob, i) => {
      if (i >= requiredBlobCount) {
        return;
      }

      const topLeft = this.convertFrom3Dto2D(blob.topLeft);
      const bottomRight = this.convertFrom3Dto2D(
        blob.topLeft.add(Vec3.from(blob.size, 0))
      );

      if (this.isInView(topLeft, bottomRight)) {
        blob.draw(this.ctx, topLeft, bottomRight.subtract(topLeft));
      }
    });

    window.requestAnimationFrame(timestamp => this.redraw(timestamp));
  }

  private getDeltaTime(timestamp: DOMHighResTimeStamp): number {
    const deltaTime = this.previousTimestamp
      ? timestamp - this.previousTimestamp
      : 0;
    this.previousTimestamp = timestamp;
    return Math.max(0, deltaTime);
  }

  private convertFrom3Dto2D(p: Vec3): Vec2 {
    const m = PageBackground.PERSPECTIVE / (PageBackground.PERSPECTIVE + p.z);
    return new Vec2(
      m * (p.z / 2 + p.x),
      m * (p.z / 2 + p.y - this.scrollPosition)
    );
  }

  private convertFrom2Dto3D(
    p: Vec2,
    z: number,
    scrollPosition: number = 0
  ): Vec2 {
    const m = 1 + z / PageBackground.PERSPECTIVE;
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

  private get requiredBlobCount(): number {
    return Math.max(
      PageBackground.MIN_BLOB_COUNT,
      Math.round(
        (this.backgroundSize.value.x * this.backgroundSize.value.y) /
          PageBackground.BLOB_SPACING ** 2
      )
    );
  }
}
