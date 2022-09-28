import { Preview } from '../../page/figure/preview/preview';
import { TimelineElementParameters } from '../../page/timeline-element/timeline-element-parameters';
import declaredPoster from '../media/decla-red.png';
import bscThesis from '../media/sdf2d-andras-schmelczer.pdf';
import { GitHub, Open, Thesis } from '../shared';

export const declared: TimelineElementParameters = {
  title: 'Multiplayer mobile game',
  date: '2020 autumn',
  figure: new Preview(declaredPoster, 'https://decla.red', 'The UI of the video game'),
  description:
    'I created a conquest-style online multiplayer browser game using my ray-tracing library (see below). It even runs on mobiles.',
  more: [
    'The scene is set in space. Two large teams have to conquer tiny planets, while they can also shoot at the other team. Points are given based on the number of planets controlled, and the first team which reaches a predefined score wins.',

    "The architecture consists of multiple servers, each of which communicates with 16-32 clients over WebSockets; Firebase is used to reach consensus on the set of active servers. The project uses TypeScript compiled into a website and a Node application. There is a shared library which contains the game logic. This way, both the client and server can link to this library, allowing to use of the same code for calculating the actual next state on the server and client-side-predicting it on the users' devices.",

    'My favourite part of the project was handling the increasingly complex and heavy-weight game logic. To tackle the former, I decided to borrow inspiration from Smalltalk\'s message passing, including the concept of "messageNotUnderstood". To improve the performance, I implemented k-d trees to decrease the spatial operations\' complexity.',

    'This game (along with SDF-2D) was my BSc thesis project, so more in-depth information about them can be found in my thesis linked below.',
  ],
  links: [
    GitHub('https://github.com/schmelczer/decla.red'),
    Thesis(bscThesis),
    Open('https://decla.red'),
  ],
};
