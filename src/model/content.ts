import { url } from "./misc";

interface Anchor {
  type: "a";
  href: url;
  text: string;
}

interface Video {
  type: "video";
  src: url;
}

export type TypedContent = Anchor | Video;

export type Content = Array<String | TypedContent>;
