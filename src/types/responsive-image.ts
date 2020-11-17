import { url } from './url';

export type ResponsiveImage = {
  srcSet: string;
  src: url;
  placeholder: string;
  width: number;
  height: number;
  images: Array<{
    path: url;
    width: number;
    height: number;
  }>;
};
