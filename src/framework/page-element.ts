export abstract class PageElement {
  // Getter and setter accessors would have to agree in visibility
  public getElement(): HTMLElement {
    return this._element;
  }
  private _element: HTMLElement;
  protected setElement(value: HTMLElement) {
    this._element = value;
  }

  protected constructor(private children: Array<PageElement> = []) {}

  public onAfterLoad(parent: HTMLElement) {
    this.children.forEach(c => c.onAfterLoad(this.getElement()));
  }
}
