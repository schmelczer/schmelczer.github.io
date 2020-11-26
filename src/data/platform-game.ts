import platformJpeg from '../static/media/platform.png?format=jpg';
import platformWebP from '../static/media/platform.png?format=webp';

import { Image } from '../page/basics/image/image';

export const platformGameTimelineElement = {
  date: `2017 autumn`,
  title: `Platform game`,
  figure: new Image(platformWebP, platformJpeg, `a picture of the app`),
  description: `A 3D game written in C with the help of SDL 1.2 (I haven't heard of GPU programming at the time).`,
  more: [
    `
      The maps are randomly generated and fully destroyable. 
      The player is getting chased by flying enemies. Overall, I find it a really enjoyable game.
    `,
    `
      I did this as a homework for my Basics of Programming course.
    `,
  ],
  links: [],
};
