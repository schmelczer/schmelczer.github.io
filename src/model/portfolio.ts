import { url } from './misc';
import { Primitive } from '../framework/primitives/primitive';
import { Image } from '../framework/primitives/implementations/image';
import { Anchor } from '../framework/primitives/implementations/anchor';
import { Video } from '../framework/primitives/implementations/video';
import { Text } from '../framework/primitives/implementations/text';

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
  gitHub: Anchor;
}

export interface CV {
  name: string;
  url: url;
}

export type Content = Array<Primitive>;
