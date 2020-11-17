import { PageElement } from '../../page-element';
import { createElement } from '../../../helper/create-element';
import { generate } from './video.html';
import { url } from '../../../types/url';

export class Video extends PageElement {
  public constructor(
    poster: url,
    mp4: url,
    webm: url,
    options?: string,
    container = true
  ) {
    super(createElement(generate({ poster, mp4, webm, options, container })));
  }
}
