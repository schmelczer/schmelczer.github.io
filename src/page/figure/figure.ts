import { html } from '../../types/html';
import { PageElement } from '../page-element';
import { generate } from './figure.html';

export abstract class Figure extends PageElement {
  public constructor(
    children: html,
    {
      hasButton = false,
      invertButton = false,
    }: {
      hasButton?: boolean;
      invertButton?: boolean;
    } = {}
  ) {
    super(generate({ children, hasButton, invertButton }));
    this.htmlRoot.addEventListener('click', this.onClick.bind(this));
  }

  protected abstract onClick(): unknown;
}
