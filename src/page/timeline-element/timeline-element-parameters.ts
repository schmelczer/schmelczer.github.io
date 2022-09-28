import { html } from '../../types/html';
import { Figure } from '../figure/figure';

export interface TimelineElementParameters {
  date: string;
  figure: Figure;
  title: string;
  description: string;
  more?: Array<html>;
  links: Array<html>;
}
