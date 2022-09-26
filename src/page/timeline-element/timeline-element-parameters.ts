import { html } from '../../types/html';
import { Preview } from '../preview/preview';
import { Video } from '../video/video';

export interface TimelineElementParameters {
  date: string;
  figure: html | Video | Preview;
  title: string;
  description: string;
  more?: Array<html>;
  links: Array<html>;
}
