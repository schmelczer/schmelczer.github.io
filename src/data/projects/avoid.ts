import { Preview } from '../../page/preview/preview';
import { TimelineElementParameters } from '../../page/timeline-element/timeline-element-parameters';
import avoidPoster from '../media/avoid.png';
import { Open } from '../shared';

export const avoid: TimelineElementParameters = {
  title: 'Avoid',
  date: '2018 January',
  figure: new Preview(
    avoidPoster,
    'https://schmelczer.dev/avoid',
    'A webpage showcasing the SDF-2D project.'
  ),
  description:
    "I recently found my first-ever web game. It's incredibly simple but I killed some time with it, so feel free to try it out but don't judge too harshly.",

  links: [Open('https://schmelczer.dev/avoid')],
};