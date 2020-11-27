import adAstraPoster from '../static/media/ad_astra.jpg?format=jpg';
import adAstraMp4 from '../static/media/mp4/ad_astra.mp4';
import adAstraWebM from '../static/media/webm/ad_astra.webm';

import { GitHub } from './shared';
import { Video } from '../page/basics/video/video';

export const adAstraTimelineElement = {
  title: `Gaming on an ATtiny85`,
  date: `2020 Spring`,
  figure: new Video({
    poster: adAstraPoster,
    mp4: adAstraMp4,
    webm: adAstraWebM,
  }),
  description: `
    A simple game engine with a sample game set in space. The greatest challenge was to overcome
    the very limited resources of the hardware, this was also the most rewarding part.
  `,
  more: [
    `
      For reducing complexity while maintaining performance, a balance had to be found between object-oriented
      and structural programming. For example, a simple prototype-based inheritance is used for the game objects; 
      meanwhile, an optimised SIMD utilising low-level driver is used for rendering to the display. 
      I think, the codebase is quite readable and at the same time also fast, with the maximum frame times 
      being between 15 and 20 milliseconds at a clock speed of 8 MHz. That means, it runs quite stably at 50-60 FPS.
    `,
    `
      As for the hardware, it is quite simple. Aside from the ATtiny85V, a D096-12864-SPI7 display is used for
      output and a TSOP4838 for input. The circuit runs on 3.3V, so a regulator is also needed. It uses a current
      of 8mA to 11mA on full brightness and around 1.5mA on standby mode.
    `,
    `
      There is also fault-tolerant persistent data storage utilising the built-in EEPROM. 
      For creating sprites (which are also stored in EEPROM), I made a tool to convert PNG-s into C array definitions. 
      This can also be found on GitHub along with the entire project.
    `,
  ],
  links: [new GitHub('https://github.com/schmelczerandras/ad_astra')],
};
