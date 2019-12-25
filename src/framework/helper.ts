import { html } from "../model/misc";

export const createElement = (from: html): HTMLElement => {
  const element: HTMLElement = document.createElement("div");
  element.innerHTML = from;
  return element.firstElementChild as HTMLElement;
};

export const randomFactory = seed => () =>
  ((2 ** 31 - 1) & (seed = Math.imul(48271, seed))) / 2 ** 31;

export const fixedSeedRandom = randomFactory(42);
