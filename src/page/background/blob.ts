import {
  choose,
  createElement,
  mixColors,
  randomFactory,
  randomInInterval
} from "../../framework/helper";

export class Blob {
  private static readonly creatorRandom = randomFactory(44);
  private static readonly colors = ["#fff9e0", "#ffd6d6"];
  private static zMin: number;
  private static zMax: number;
  private static perspective: number;
  public static initialize(zMin: number, zMax: number, perspective: number) {
    Blob.zMin = zMin;
    Blob.zMax = zMax;
    Blob.perspective = perspective;
  }

  private readonly z = randomInInterval(
    Blob.zMin,
    Blob.zMax,
    Blob.creatorRandom
  );

  private readonly element: HTMLElement = createElement("<div></div>");
  constructor() {
    this.element.style.backgroundColor =
      "#" +
      mixColors(
        "#ffffff",
        choose(Blob.colors, Blob.creatorRandom),
        (this.z - Blob.zMin) / (Blob.zMax - Blob.zMin)
      );
    this.element.style.zIndex = (-this.z).toString();
    this.element.style.height = `${randomInInterval(
      160,
      750,
      Blob.creatorRandom
    )}px`;
  }

  get htmlElement(): HTMLElement {
    return this.element;
  }

  private randomWithKnownZ(
    random: () => number,
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

    return randomInInterval(lowerBound, lowerBound + l, random);
  }

  public show() {
    this.element.style.opacity = "1";
  }

  public hide() {
    this.element.style.opacity = "0";
  }

  public transform(
    random: () => number,
    width: number,
    viewportHeight: number,
    scrollHeight: number,
    startOffset: number,
    endOffset: number
  ) {
    this.element.style.transform = `
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
  }
}
