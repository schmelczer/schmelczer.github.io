import { html } from "../model/misc";

export const createElement = (from: html): HTMLElement => {
  const element: HTMLElement = document.createElement("div");
  element.innerHTML = from;
  return element.firstElementChild as HTMLElement;
};

export const randomFactory = seed => () =>
  ((2 ** 31 - 1) & (seed = Math.imul(48271, seed))) / 2 ** 31;

export const fixedSeedRandom = randomFactory(42);

export const choose = <T>(
  list: Array<T>,
  random: () => number = fixedSeedRandom
): T => list[randomInInterval(0, list.length, random)];

export const randomInInterval = (
  aClosed: number,
  bOpen: number,
  random: () => number = fixedSeedRandom
): number => Math.floor((bOpen - aClosed) * random()) + aClosed;

export const sum = (list: ArrayLike<number>): number =>
  Array.prototype.reduce.call(list, (a, sum) => a + sum, 0);

export const getHeight = (e: HTMLElement): number => {
  const computedStyle = window.getComputedStyle(e);
  return (
    // ignores margin collapse
    e.clientHeight +
    parseInt(computedStyle.marginTop) +
    parseInt(computedStyle.marginBottom) +
    parseInt(computedStyle.borderTopWidth) +
    parseInt(computedStyle.borderBottomWidth)
  );
};

export const mixColors = (
  hexColorA: string,
  hexColorB: string,
  qA: number
): string => {
  const colorA = hexToRGB(normalizeHex(hexColorA));
  const colorB = hexToRGB(normalizeHex(hexColorB));
  const mixedColor: [number, number, number] = [
    colorA[0] * qA + colorB[0] * (1 - qA),
    colorA[1] * qA + colorB[1] * (1 - qA),
    colorA[2] * qA + colorB[2] * (1 - qA)
  ];

  return RGBToHex(mixedColor);
};

const normalizeHex = (hex: string): string => {
  hex = hex.trim();
  if (hex.startsWith("#")) {
    hex = hex.substr(1);
  }
  return hex;
};

const hexToRGB = (hex: string): [number, number, number] => {
  const [r1, r2, g1, g2, b1, b2] = hex;
  return [
    Number.parseInt(r1 + r2, 16),
    Number.parseInt(g1 + g2, 16),
    Number.parseInt(b1 + b2, 16)
  ];
};

const RGBToHex = (rgb: [number, number, number]): string =>
  rgb.map(n => Math.round(n).toString(16)).join("");
