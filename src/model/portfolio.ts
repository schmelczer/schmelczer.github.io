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
  title: string;
  email: string;
  cv: url;
  cvName: string;
  githubLinkName: string;
  githubLink: url;
  lastEditName: string;
  lastEdit: Date;
}
