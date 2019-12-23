import { url } from "./misc";
import { Content } from "./content";

export interface Portfolio {
  config: Config;
  header: Header;
  timeline: Array<TimelineElement>;
  footer: Footer;
}

export interface Config {
  showMore: string;
  showLess: string;
  aPictureOf: string;
  cvName: string;
  lastEdit: Date;
}

export interface Header {
  name: string;
  picture: url;
  about: Content;
}

export interface TimelineElement {
  title: string;
  date: string;
  picture: url;
  description: string;
  more?: Content;
  link?: url;
}

export interface Footer {
  email: string;
  cv: url;
}
