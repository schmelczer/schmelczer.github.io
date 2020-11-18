import { Video } from '../page/basics/video/video';
import { Text } from '../page/basics/text/text';
import { Image } from '../page/basics/image/image';

import { PageElement } from '../page/page-element';
import { url } from './url';
import { Preview } from '../page/basics/preview/preview';

export interface Portfolio {
  header: Header;
  timeline: Timeline;
  footer: Footer;
}

export interface Header {
  name: string;
  picture: Image;
  about: Content;
}

export interface Timeline {
  showMoreText: string;
  showLessText: string;
  elements: Array<TimelineElement>;
}

export interface TimelineElement {
  date: string;
  figure: Image | Video | Preview;
  title: string;
  description: Text;
  more?: Content;
  links: Array<PageElement>;
}

export interface Footer {
  title: string;
  email: string;
  curriculaVitae: Array<CV>;
  lastEditText: string;
  lastEdit: Date;
}

export interface CV {
  name: string;
  url: url;
}

export type Content = Array<PageElement>;
