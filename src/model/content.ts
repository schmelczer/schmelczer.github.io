import { ResponsiveImage, url } from "./misc";

export type Anchor = {
  type: "a";
  href: url;
  text: string;
};

export type Video = {
  type: "video";
  mp4: url;
  webm: url;
  options?: string;
};

export type Image = {
  type: "img";
  alt: string;
  image: ResponsiveImage;
};

export type TypedContent = Anchor | Video | Image;

export type Content = Array<String | TypedContent>;
