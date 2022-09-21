import { createElement } from '../../../helper/create-element';
import { ResponsiveImage } from '../../../types/responsive-image';
import { url } from '../../../types/url';
import { PageElement } from '../../page-element';
import { Image } from '../image/image';
import { generate } from './video.html';

export interface VideoParameters {
  mp4: url;
  webm: url;
  posterWebP: ResponsiveImage;
  posterJpeg: ResponsiveImage;
  invertButton?: boolean;
}

export class Video extends PageElement {
  private video: HTMLVideoElement;

  public constructor(options: VideoParameters) {
    super(createElement(generate(options)));
    this.attachElementByReplacing(
      '.poster',
      new Image(options.posterWebP, options.posterJpeg, `thumbnail for the video`, false)
    );

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
