import { TimelineElementParameters } from '../../page/timeline-element/timeline-element-parameters';
import { Video } from '../../page/video/video';
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
    "A 3D game written in C with the help of SDL 1.2 (I haven't heard of GPU programming at the time).",
  more: [
    'The maps are randomly generated and fully destroyable. The player is getting chased by flying enemies. Overall, I find it a really enjoyable game.',
    'I did this as a homework for my Basics of Programming course.',
  ],
  links: [],
};
