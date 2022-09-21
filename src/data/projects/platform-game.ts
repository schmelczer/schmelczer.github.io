import { Video } from '../../page/basics/video/video';
import { TimelineElementParameters } from '../../page/timeline/timeline-element/timeline-element';
import platformMp4 from '../media/mp4/platform.mp4';
import platformPosterJpeg from '../media/platform.png?format=jpg';
import platformPosterWebP from '../media/platform.png?format=webp';
import platformWebM from '../media/webm/platform.webm';

export const platformGameTimelineElement: TimelineElementParameters = {
  title: `Platform game`,
  date: `2017 autumn`,
  figure: new Video({
    posterWebP: platformPosterWebP,
    posterJpeg: platformPosterJpeg,
    mp4: platformMp4,
    webm: platformWebM,
  }),
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
