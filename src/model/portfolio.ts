import { url } from "./misc";
import { Anchor, Content, Image, Video } from "./content";

export interface Portfolio {
  config: Config;
  header: Header;
  timeline: Array<TimelineElement>;
  footer: Footer;
}

export interface Config {
  showMore: string;
  showLess: string;
}

export interface Header {
  name: string;
  picture: Image;
  about: Content;
}

export interface TimelineElement {
  title: string;
  date: string;
  figure: Image | Video;
  description: string;
  more?: Content;
  link?: Anchor;
}

export interface Footer {
  title: string;
  email: string;
  cv: url;
  cvName: string;
  lastEditName: string;
  lastEdit: Date;
}
