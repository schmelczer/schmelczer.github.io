import { html } from '../types/html';

export class PageElement {
  public readonly htmlRoot: HTMLElement;

  public constructor(
    content: html,
    protected children: Array<PageElement> = []
  ) {
    this.htmlRoot = PageElement.createElement(content);
  }

  public attachToDOM(target: HTMLElement) {
    target.appendChild(this.htmlRoot);
    this.initialize();
  }

  protected initialize(): void {
    this.children.forEach((c) => c.initialize());
  }

  protected query(query: string): HTMLElement {
    return this.htmlRoot.querySelector(query) as HTMLElement;
  }

  protected attachElement(element: PageElement) {
    this.htmlRoot.appendChild(element.htmlRoot);
    this.children.push(element);
  }

  protected attachElementByReplacing(query: string, element: PageElement) {
    const old = this.query(query);
    old.parentElement!.replaceChild(element.htmlRoot, old);
    this.children.push(element);
  }

  private static createElement(from: html): HTMLElement {
    // won't work for all elements, eg.: <td>
    const element: HTMLElement = document.createElement('div');
    element.innerHTML = from;
    return element.firstElementChild as HTMLElement;
  }
}
