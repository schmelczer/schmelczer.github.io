import sdf2dJpeg from '../static/media/sdf2d.png?format=jpg';
import sdf2dWebP from '../static/media/sdf2d.png?format=webp';

import { Preview } from '../page/basics/preview/preview';
import { Open, NPM, Youtube } from './shared';

export const sdf2dTimelineElement = {
  title: `2D ray tracing`,
  date: `2020 Autumn`,
  figure: new Preview(
    sdf2dWebP,
    sdf2dJpeg,
    'https://sdf2d.schmelczer.dev',
    'A webpage showcasing the SDF-2D project.'
  ),
  description: `
    I created the SDF-2D library for efficiently rendering 2D scenes using ray tracing.
    My solution relies on signed distance fields (SDF-s), it supports both WebGL and WebGL2,
    and is an easily reusable and extendible NPM package.
  `,
  more: [
    `
      A multitude of optimisations were needed to achieve real-time performance even on low-end mobile devices.
      These include deferred shading, tile-based rendering, and dynamic shader generation to eliminate unnecessary
      instructions.
    `,
    `
      The result is a reusable library written in TypeScript with a — subjectively — simple and elegant API. 
      For more information please check out the GitHub repository or the NPM package itself. Or simply enjoy the
      mesmerising demo scenes.
    `,
    `
      Creating this library package is also covered in my thesis (available above).
    `,
  ],
  links: [
    new NPM('https://www.npmjs.com/package/sdf-2d'),
    new Youtube('https://www.youtube.com/watch?v=K3cEtnZUNR0'),
    new Open('https://sdf2d.schmelczer.dev'),
  ],
};
