export class PageElement {
  public constructor(
    public readonly htmlRoot: HTMLElement,
    protected children: Array<PageElement> = []
  ) {}

  public attachToDOM(target: HTMLElement) {
    target.appendChild(this.htmlRoot);
    this.setParent(null);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected setParent(parent?: PageElement | null): void {
    this.children.forEach((c) => c.setParent(this));
  }

  protected query(query: string): HTMLElement {
    return this.htmlRoot.querySelector(query) as HTMLElement;
  }

  protected attachElementByReplacing(query: string, element: PageElement) {
    const old = this.query(query);
    old.parentElement!.replaceChild(element.htmlRoot, old);
    this.children.push(element);
  }

  protected attachElementAsChildOf(query: string, element: PageElement) {
    this.query(query).appendChild(element.htmlRoot);
    this.children.push(element);
  }

  protected attachElement(element: PageElement) {
    this.htmlRoot.appendChild(element.htmlRoot);
    this.children.push(element);
  }
}
