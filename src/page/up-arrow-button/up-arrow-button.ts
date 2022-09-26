import { PageElement } from '../page-element';
import { generate } from './up-arrow-button.html';

export class UpArrowButton extends PageElement {
  private static readonly defaultTimeToLive = 2000;
  private static readonly interval = 50;
  private timeToLive = 0;

  public constructor(private scrollTarget: PageElement, label: string) {
    super(generate(label));

    this.htmlRoot.addEventListener('click', this.scrollToTop.bind(this));

    setInterval(() => {
      this.timeToLive = Math.max(0, this.timeToLive - UpArrowButton.interval);
      if (this.timeToLive == 0) {
        this.htmlRoot.style.opacity = '0';
        this.htmlRoot.style.visibility = 'hidden';
      }
    }, UpArrowButton.interval);
  }

  protected initialize() {
    this.scrollTarget.htmlRoot.addEventListener('scroll', () => {
      this.timeToLive = UpArrowButton.defaultTimeToLive;
      this.htmlRoot.style.opacity = '1';
      this.htmlRoot.style.visibility = 'visible';

      if (this.scrollTarget.htmlRoot.scrollTop == 0) {
        this.timeToLive = 0;
      }
    });
  }

  private scrollToTop(e: MouseEvent) {
    if (this.timeToLive > 0) {
      this.scrollTarget.htmlRoot.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      e.preventDefault();
    }
  }
}
