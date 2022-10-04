import { PageElement } from '../page-element';
import { generate } from './up-arrow-button.html';

export class UpArrowButton extends PageElement {
  private static readonly defaultTimeToLive = 3500;
  private static readonly interval = 50;
  private timeToLive = 0;

  public constructor(
    private scrollTarget: PageElement,
    private turningThreshold: PageElement,
    label: string
  ) {
    super(generate(label));

    this.htmlRoot.addEventListener('click', this.scrollToTop.bind(this));

    setInterval(() => {
      this.timeToLive = Math.max(0, this.timeToLive - UpArrowButton.interval);
      if (this.timeToLive == 0) {
        this.htmlRoot.style.opacity = '0';
      }
    }, UpArrowButton.interval);
  }

  protected initialize() {
    this.scrollTarget.htmlRoot.addEventListener('scroll', () => {
      this.timeToLive = UpArrowButton.defaultTimeToLive;
      this.htmlRoot.style.opacity = '1';
    });

    this.htmlRoot.addEventListener('mouseover', () => {
      this.timeToLive = UpArrowButton.defaultTimeToLive;
      this.htmlRoot.style.opacity = '1';
    });

    new IntersectionObserver((e) => {
      if (e[0].isIntersecting) {
        this.htmlRoot.classList.remove('down');
      } else {
        this.htmlRoot.classList.add('down');
      }
    }).observe(this.turningThreshold.htmlRoot);

    super.initialize();
  }

  private scrollToTop() {
    this.scrollTarget.htmlRoot.scrollTo({
      top: this.htmlRoot.classList.contains('down')
        ? this.scrollTarget.htmlRoot.scrollHeight
        : 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
