import { PageElement } from '../page-element';
import { VideoParameters } from './video-parameters';
import { generate } from './video.html';

export class Video extends PageElement {
  public constructor(options: VideoParameters) {
    super(generate(options));

    this.query('.start-button').addEventListener('click', this.startVideo.bind(this));
  }

  private async startVideo() {
    this.query('.start-button').style.visibility = 'hidden';
    this.htmlRoot.classList.add('loaded');

    await (this.query('video') as HTMLVideoElement).play();
  }
}
