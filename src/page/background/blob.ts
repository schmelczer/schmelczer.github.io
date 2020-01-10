import { mixColors } from '../../framework/helper/mix-colors';
import { createElement } from '../../framework/helper/create-element';
import { Random } from '../../framework/helper/random';
import { generate } from './blob.html';

export class Blob {
  private static readonly creatorRandom = new Random(44);
  private static readonly darkColors = ['#2c477a'];
  private static readonly lightColors = ['#fff9e0', '#ffd6d6'];
  private static colorPickerRandom = new Random(132);
  private static isDarkThemed = false;

  private static zMin: number;
  private static zMax: number;
  private static perspective: number;
  public static initialize(zMin: number, zMax: number, perspective: number) {
    Blob.zMin = zMin;
    Blob.zMax = zMax;
    Blob.perspective = perspective;
  }

  public static changeTheme(isDarkThemed: boolean) {
    Blob.colorPickerRandom = new Random(132);
    Blob.isDarkThemed = isDarkThemed;
  }

  private readonly z = Blob.creatorRandom.randomInInterval(
    Blob.zMin,
    Blob.zMax
  );

  private readonly element: HTMLElement = createElement(generate());
  constructor() {
    this.decideColor();
    this.element.style.zIndex = Math.round(-this.z).toString();
    this.element.style.height = `${Blob.creatorRandom.randomInInterval(
      160,
      740
    )}px`;
  }

  public decideColor() {
    this.element.style.backgroundColor = mixColors(
      Blob.isDarkThemed ? '#242638  ' : '#ffffff',
      Blob.colorPickerRandom.choose(
        Blob.isDarkThemed ? Blob.darkColors : Blob.lightColors
      ),
      (this.z - Blob.zMin) / (Blob.zMax - Blob.zMin)
    );
  }

  get htmlElement(): HTMLElement {
    return this.element;
  }

  private randomWithKnownZ(
    random: Random,
    viewportSize: number,
    scrollSize: number,
    startOffset = 0,
    endOffset = 0
  ): number {
    const m = 1 + this.z / Blob.perspective;

    const variableOffset = (offset, q) =>
      Math.max(
        0,
        offset - ((this.z - Blob.zMin) / (Blob.zMax - Blob.zMin)) * (offset * q)
      );

    startOffset = variableOffset(startOffset, 1);
    endOffset = variableOffset(endOffset, 0.2);

    const lowerBound = viewportSize / 2 - (viewportSize / 2 - startOffset) * m;
    const l =
      scrollSize - viewportSize + (viewportSize - startOffset - endOffset) * m;

    return random.randomInInterval(lowerBound, lowerBound + l);
  }

  public show() {
    this.element.style.opacity = '1';
  }

  public hide() {
    this.element.style.opacity = '0';
  }

  public transform(
    random: Random,
    width: number,
    viewportHeight: number,
    scrollHeight: number,
    startOffset: number,
    endOffset: number
  ) {
    const value = `
      translateX(${this.randomWithKnownZ(random, width, width)}px)
      translateY(${this.randomWithKnownZ(
        random,
        viewportHeight,
        scrollHeight,
        startOffset,
        endOffset
      )}px)
      translateZ(${-this.z}px)
      rotate(-20deg)
    `;
    this.element.style['-webkit-transform'] = value;
    this.element.style.transform = value;
  }
}
