import { TimelineElementParameters } from '../../page/timeline/timeline-element/timeline-element-parameters';
import { Video } from '../../page/video/video';
import forexPoster from '../media/forex.jpg';
import forexMp4 from '../media/mp4/forex.mp4';
import forexWebM from '../media/webm/forex.webm';
import { videoPosterAltText } from '../shared';

export const forex: TimelineElementParameters = {
  title: 'Predicting foreign exchange rates',
  date: '2019 autumn',
  figure: new Video({
    poster: forexPoster,
    mp4: forexMp4,
    webm: forexWebM,
    invertButton: true,
    altText: videoPosterAltText,
  }),
  description:
    'From the animation, we can see that my implementation does a somewhat acceptable job at predicting (blue graph) the EUR/USD rates (green graph).',
  more: [
    'In a nutshell, the algorithm (written in Python using NumPy, SciPy, and Flask) predicts in the frequency domain. The steps are the following: smoothing the input values, differentiating, applying a short-time Fourier-transformation with overlapped (and Hanning-windowed) windows, extrapolating and then applying the inverse of these transformations to the resulting values.',
    'Of course, there is still plenty of room for improvement, but even with this simple algorithm a mostly profitable trading strategy is viable. In my free time I may put more work into it.',
  ],
  links: [],
};
