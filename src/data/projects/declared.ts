import { Preview } from '../../page/preview/preview';
import { TimelineElementParameters } from '../../page/timeline-element/timeline-element-parameters';
import declaredPoster from '../media/decla-red.png';
import bscThesis from '../media/sdf2d-andras-schmelczer.pdf';
import { GitHub, Open, Thesis } from '../shared';

export const declared: TimelineElementParameters = {
  title: 'Multiplayer game',
  date: '2020 autumn',
  figure: new Preview(
    declaredPoster,
    'https://decla.red',
    'The website of the video game'
  ),
  description:
    'Using SDF-2D (my ray tracing graphics library), I created a conquest-style multiplayer browser game. It even runs on mobiles.',
  more: [
    'The scene is set in space, two teams have to conquer small planets, while they can also shoot at the other team. Points are given based on the number of planets controlled, and the first team which reaches a predefined score wins.',

    'As for the communication, a server-client architecture is used. Messaging is provided by Socket.IO and a custom serialisation solution.',

    'This (along with SDF-2D) was my BSc thesis project, so more in-depth information about them can be found in my thesis linked below.',
  ],
  links: [
    GitHub('https://github.com/schmelczer/decla.red'),
    Thesis(bscThesis),
    Open('https://decla.red'),
  ],
};
