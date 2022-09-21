import { createElement } from '../../../helper/create-element';
import { PageElement } from '../../page-element';
import { VideoParameters } from './video-parameters';
import { generate } from './video.html';

export class Video extends PageElement {
  private video: HTMLVideoElement;

  public constructor(options: VideoParameters) {
    super(createElement(generate(options)));
    this.video = this.query('video') as HTMLVideoElement;
    this.video.addEventListener('click', this.startVideo.bind(this));
    this.video.addEventListener('play', () =>
      this.htmlRoot.classList.add('fully-loaded')
    );
    this.query('.start-button').addEventListener('click', this.startVideo.bind(this));
    this.video.addEventListener('pause', this.stopVideo.bind(this));
  }

  private startVideo(e: Event) {
    if (this.video.paused) {
      this.query('.start-button').style.visibility = 'hidden';
      this.htmlRoot.classList.add('loaded');
      this.video.play();
      this.video.controls = true;
      e.preventDefault();
    }
  }

  private stopVideo(e: Event) {
    if (this.video.paused) {
      this.query('.start-button').style.visibility = 'visible';
      this.video.controls = false;
      e.preventDefault();
    }
  }
}
