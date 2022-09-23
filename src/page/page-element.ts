export class PageElement {
  public constructor(
    public readonly htmlRoot: HTMLElement,
    protected children: Array<PageElement> = []
  ) {}

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
}
