import { Video } from '../page/basics/video/video';
import { Text } from '../page/basics/text/text';
import { Image } from '../page/basics/image/image';
import { Anchor } from '../page/basics/anchor/anchor';
import { PageElement } from '../page/page-element';
import { url } from './url';

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
  title: string;
  date: string;
  figure: Image | Video;
  description: Text;
  more?: Content;
  link?: Anchor;
}

export interface Footer {
  title: string;
  email: string;
  curiumVitaes: Array<CV>;
  lastEditText: string;
  lastEdit: Date;
}

export interface CV {
  name: string;
  url: url;
}

export type Content = Array<PageElement>;
