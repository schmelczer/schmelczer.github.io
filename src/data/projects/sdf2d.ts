import { Preview } from '../../page/figure/preview/preview';
import { TimelineElementParameters } from '../../page/timeline-element/timeline-element-parameters';
import sdf2dPoster from '../media/sdf2d.png';
import { NPM, Open, Youtube } from '../shared';

export const sdf2d: TimelineElementParameters = {
  title: 'Optimising 2D ray tracing',
  date: '2020 autumn',
  figure: new Preview(
    sdf2dPoster,
    'https://sdf2d.schmelczer.dev',
    'A webpage showcasing the SDF-2D project.'
  ),
  description:
    'I created the SDF-2D library for efficiently rendering 2D scenes using ray tracing. My solution relies on signed distance fields (SDF-s) and a novel optimisation for 2D SDF rendering inspired by tiled renderers. It even works great on mobiles.',
  more: [
    "A multitude of optimisations was needed to achieve compatibility and real-time performance, even on low-end devices. Next to tile-based rendering, these include deferred shading and dynamic shader generation to eliminate unnecessary instructions based on the device's capabilities.",

    'The result is a reusable library written in TypeScript with a — subjectively — simple and elegant API. The library supports WebGL and WebGL2 and is an easily reusable and extensible NPM package.',

    'Please check out the GitHub repository, the NPM package, or my thesis (linked above) for more information. Or simply enjoy the mesmerising demo scenes.',
  ],
  links: [
    NPM('https://www.npmjs.com/package/sdf-2d'),
    Youtube('https://www.youtube.com/watch?v=K3cEtnZUNR0'),
    Open('https://sdf2d.schmelczer.dev'),
  ],
};
