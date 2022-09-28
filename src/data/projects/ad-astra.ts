import { Video } from '../../page/figure/video/video';
import { TimelineElementParameters } from '../../page/timeline-element/timeline-element-parameters';
import adAstraPoster from '../media/ad_astra.jpg';
import adAstraMp4 from '../media/mp4/ad_astra.mp4';
import adAstraWebM from '../media/webm/ad_astra.webm';
import { GitHub, videoPosterAltText } from '../shared';

export const adAstra: TimelineElementParameters = {
  title: 'Embedded game engine',
  date: '2020 spring',
  figure: new Video({
    poster: adAstraPoster,
    mp4: adAstraMp4,
    webm: adAstraWebM,
    altText: videoPosterAltText,
  }),
  description:
    "I've always wanted to combine graphics and microcontrollers, so the obvious next step was making a game engine for the ATTiny85. The video shows how I created an enjoyable game using my engine, literally, from scratch.",
  more: [
    "Besides overcoming the hardware's minimal resources, the greatest challenge was designing and manufacturing the PCB; this was also the most rewarding part. The hardware setup is straightforward. Aside from the ATtiny85V, I used a D096-12864-SPI7 OLED display as output and a TSOP4838 IR receiver as input. The circuit runs on 3.3V, so a regulator is also needed. The system is very low-power, with its peak consumption at around 31mW on full brightness, and there is also a standby mode with a current draw of just 1.5mA.",

    "Even though I used C for programming, I tried striking a balance between object-oriented and structured programming to reduce complexity while maintaining performance. For example, I used prototype-based inheritance for the game objects, allowing easy code reuse. Meanwhile, I created a high-performance driver for the display, which uses SIMD techniques to process 4 pixels at once (it's an 8-bit ALU). Thanks to this, the maximum frame times are between 15 and 20 milliseconds at a clock speed of 8 MHz. This means that the lowest FPS during gameplay never dips below 50 FPS.",

    'There is also fault-tolerant persistent data storage (with atomic commit) utilising the built-in EEPROM for storing game state. To create sprites (which are also stored in the EEPROM), I made a tool that converts PNG-s into C array definitions. These scripts can also be found on GitHub, along with the entire project.',
  ],
  links: [GitHub('https://github.com/schmelczer/ad_astra')],
};
