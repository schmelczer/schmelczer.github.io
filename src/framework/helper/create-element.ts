import { html } from '../../model/misc';

export const createElement = (from: html): HTMLElement => {
  // won't work for all elements, eg.: <td>
  const element: HTMLElement = document.createElement('div');
  element.innerHTML = from;
  return element.firstElementChild as HTMLElement;
};
