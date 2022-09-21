import { ResponsiveImage } from '../../../types/responsive-image';
import { url } from '../../../types/url';

export interface VideoParameters {
  mp4: url;
  webm: url;
  posterWebP: ResponsiveImage;
  invertButton?: boolean;
}
