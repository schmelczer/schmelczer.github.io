import { Video } from '../../page/figure/video/video';
import { TimelineElementParameters } from '../../page/timeline-element/timeline-element-parameters';
import platformMp4 from '../media/mp4/platform.mp4';
import platformPoster from '../media/platform.png';
import platformWebM from '../media/webm/platform.webm';
import { videoPosterAltText } from '../shared';

export const platformGame: TimelineElementParameters = {
  title: 'Platform game',
  date: '2017 autumn',
  figure: new Video({
    poster: platformPoster,
    mp4: platformMp4,
    webm: platformWebM,
    altText: videoPosterAltText,
  }),
  description:
    'This was my first proper project. I created an actually fun, 3D game written in pure C with the help of SDL 1.2',
  more: [
    'The maps are randomly generated and fully destroyable voxel-by-voxel. This also allows for creating structures for hiding from flying enemies who chase the player and also can destroy the terrain after merging together and growing larger. After collecting enough powerups, they can shoot and even slow down time in exchange for losing some points.',

    'I did this as my final project for my Basics of Programming course. Through making this, I learned a lot about pointers after an adequate number of segmentation faults. But it also made me realise my passion for programming.',
  ],
  links: [],
};
