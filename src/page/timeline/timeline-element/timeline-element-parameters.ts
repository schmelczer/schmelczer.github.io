import { html } from '../../../types/html';
import { Image } from '../../basics/image/image';
import { Preview } from '../../basics/preview/preview';
import { Video } from '../../basics/video/video';

export interface TimelineElementParameters {
  date: string;
  figure: Image | Video | Preview;
  title: string;
  description: string;
  more: Array<string>;
  links: Array<html>;
}
