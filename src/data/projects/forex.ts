import { Video } from '../../page/figure/video/video';
import { TimelineElementParameters } from '../../page/timeline-element/timeline-element-parameters';
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
    "The animation shows that my implementation does a somewhat good job predicting (blue graph) the EUR/USD rates (green chart). Of course, I wouldn't trust it with my money.",
  more: [
    'The algorithm is a fancy linear regression in the frequency domain. The steps are the following: smoothing the input values, differentiating, applying a short-time Fourier transformation with overlapped (and Hanning-windowed) windows, extrapolating and then applying the inverse of these transformations to the resulting values.',

    'This prediction server, written in Python using NumPy, SciPy, and Flask, communicates with an MQL4 client responsible for handling the financial transaction based on this data.',

    "Of course, there is still plenty of room for improvement, but even with this simple algorithm, a sometimes profitable trading strategy is viable. Nonetheless, the project gave me an exciting insight into the world of trading algorithms, the field's complexity, and the fierce competition surrounding it.",
  ],
  links: [],
};
