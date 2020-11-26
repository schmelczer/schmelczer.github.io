import { PageElement } from '../../page-element';
import { createElement } from '../../../helper/create-element';
import { generate } from './video.html';
import { url } from '../../../types/url';

export class Video extends PageElement {
  public constructor(options: {
    poster?: url;
    mp4: url;
    webm: url;
    shouldActLikeGif?: boolean;
    container?: boolean;
  }) {
    super(createElement(generate(options)));
  }
}
