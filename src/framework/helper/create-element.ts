import { html } from '../../model/misc';

export const createElement = (from: html): HTMLElement => {
  const element: HTMLElement = document.createElement('div');
  element.innerHTML = from;
  return element.firstElementChild as HTMLElement;
};
