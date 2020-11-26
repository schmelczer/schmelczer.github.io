import ledPoster from '../static/media/led.jpg?format=jpg';
import ledMp4 from '../static/media/led.mp4';
import ledWebM from '../static/media/led.webm';

import { last } from '../helper/last';
import { Video } from '../page/basics/video/video';

export const ledsTimelineElement = {
  date: `2016 spring`,
  title: `Lights synchronised to music`,
  figure: new Video({
    poster: last(ledPoster.images)!.path,
    mp4: ledMp4,
    webm: ledWebM,
  }),
  description: `
    A full stack application with a built-in music player
    the output of which controls the colour of a couple of RGB LED strips.
  `,
  more: [
    `
      This was my first non-trivial project which got finished. Obviously, 
      it is rather far from perfect, but I am still proud that I was able
      to build it on my own.
    `,
    `
      The backend logic is written in Python, the FFT implementation is provided by NumPy. 
      A quite simple frontend for accessing the music player and changing 
      the settings also got built using vanilla web development technologies.
    `,
  ],
  links: [],
};
