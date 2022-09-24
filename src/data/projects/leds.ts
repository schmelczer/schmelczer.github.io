import { TimelineElementParameters } from '../../page/timeline/timeline-element/timeline-element-parameters';
import { Video } from '../../page/video/video';
import ledPoster from '../media/led.jpg';
import ledMp4 from '../media/mp4/led.mp4';
import ledWebM from '../media/webm/led.webm';
import { videoPosterAltText } from '../shared';

export const leds: TimelineElementParameters = {
  title: 'Lights synchronised to music',
  date: '2016 spring',
  figure: new Video({
    poster: ledPoster,
    mp4: ledMp4,
    webm: ledWebM,
    altText: videoPosterAltText,
  }),
  description:
    'A full stack application with a built-in music player the output of which controls the colour of a couple of RGB LED strips.',
  more: [
    'This was my first non-trivial project which got finished. Obviously, it is rather far from perfect, but I am still proud that I was able to build it on my own.',
    'The backend logic is written in Python, the FFT implementation is provided by NumPy. A quite simple frontend for accessing the music player and changing the settings also got built using vanilla web development technologies.',
  ],
  links: [],
};
