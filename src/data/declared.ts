import declaredJpeg from '../static/media/decla-red.png?format=jpg';
import declaredWebP from '../static/media/decla-red.png?format=webp';
import thesis from '../static/media/andras_schmelczer_thesis.pdf';

import { Preview } from '../page/basics/preview/preview';
import { GitHub, Thesis, Open } from './shared';

export const declaredTimelineElement = {
  title: `Multiplayer game`,
  date: `2020 Autumn`,
  figure: new Preview(
    declaredWebP,
    declaredJpeg,
    'https://decla.red',
    'The website of the video game'
  ),
  description: `
    Using SDF-2D (my ray tracing graphics library), I created a conquest-style multiplayer browser game. 
    It even runs on mobiles.
  `,
  more: [
    `
      The scene is set in space, two teams have to conquer small planets, while they can also shoot at the other team. 
      Points are given based on the number of planets controlled, and the first team which reaches a predefined score wins.
    `,
    `
      As for the communication, a server-client architecture is used. Messaging is provided by Socket.IO and 
      a custom serialisation solution. 
    `,
    `
      This (along with SDF-2D) was my BSc thesis project, so more in-depth information about them
      can be found in my thesis linked below.
    `,
  ],
  links: [
    new GitHub('https://github.com/schmelczerandras/decla.red'),
    new Thesis(thesis),
    new Open('https://decla.red'),
  ],
};
