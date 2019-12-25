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
