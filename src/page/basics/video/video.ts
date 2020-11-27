import { PageElement } from '../../page-element';
import { createElement } from '../../../helper/create-element';
import { generate } from './video.html';
import { url } from '../../../types/url';
import { ResponsiveImage } from '../../../types/responsive-image';

export interface VideoParameters {
  mp4: url;
  webm: url;
  poster: ResponsiveImage;
  invertButton?: boolean;
}

export class Video extends PageElement {
  private video: HTMLVideoElement;

  public constructor(options: VideoParameters) {
    super(createElement(generate(options)));
    this.video = this.query('video') as HTMLVideoElement;
    this.video.addEventListener('click', this.startVideo.bind(this));
    this.query('.start-button').addEventListener('click', this.startVideo.bind(this));
    this.video.addEventListener('pause', this.stopVideo.bind(this));
  }

  private startVideo(e: Event) {
    if (this.video.paused) {
      this.query('.start-button').style.visibility = 'hidden';
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
