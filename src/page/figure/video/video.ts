import { Figure } from '../figure';
import { VideoParameters } from './video-parameters';
import { generate } from './video.html';

export class Video extends Figure {
  public constructor(options: VideoParameters) {
    super(generate(options), {
      hasButton: true,
      invertButton: options.invertButton,
    });
  }

  protected async onClick() {
    this.query('.start-button').style.visibility = 'hidden';
    this.htmlRoot.classList.add('loaded');

    await (this.query('video') as HTMLVideoElement).play();
  }
}
