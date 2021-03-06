import forexPosterWebP from '../static/media/forex.jpg?format=webp';
import forexPosterJpeg from '../static/media/forex.jpg?format=jpg';
import forexMp4 from '../static/media/mp4/forex.mp4';
import forexWebM from '../static/media/webm/forex.webm';

import { Video } from '../page/basics/video/video';

export const forexTimelineElement = {
  title: `Predicting foreign exchange rates`,
  date: `2019 autumn`,
  figure: new Video({
    posterWebP: forexPosterWebP,
    posterJpeg: forexPosterJpeg,
    mp4: forexMp4,
    webm: forexWebM,
    invertButton: true,
  }),
  description: `
    From the animation, we can see that my implementation does a somewhat acceptable job at
    predicting (blue graph) the EUR/USD rates (green graph).
  `,
  more: [
    `
      In a nutshell, the algorithm (written in Python using NumPy, SciPy, and Flask)
      predicts in the frequency domain. The steps are the following: smoothing the input values, 
      differentiating, applying a short-time Fourier-transformation with overlapped (and Hanning-windowed) windows,
      extrapolating and then applying the inverse of these transformations to the resulting values.
    `,
    `
      Of course, there is still plenty of room for improvement, but even with this simple algorithm
      a mostly profitable trading strategy is viable. In my free time I may put more work into it.
    `,
  ],
  links: [],
};
