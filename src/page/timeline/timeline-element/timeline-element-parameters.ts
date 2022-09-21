import { html } from '../../../types/html';
import { Preview } from '../../basics/preview/preview';
import { Video } from '../../basics/video/video';

export interface TimelineElementParameters {
  date: string;
  figure: html | Video | Preview;
  title: string;
  description: string;
  more: Array<string>;
  links: Array<html>;
}
