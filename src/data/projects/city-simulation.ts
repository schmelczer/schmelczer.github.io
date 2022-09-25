import { TimelineElementParameters } from '../../page/timeline-element/timeline-element-parameters';
import { Video } from '../../page/video/video';
import citySimulationMp4 from '../media/mp4/simulation.mp4';
import citySimulationPoster from '../media/simulation.jpg';
import citySimulationWebM from '../media/webm/simulation.webm';
import { videoPosterAltText } from '../shared';

export const citySimulation: TimelineElementParameters = {
  title: 'City simulation',
  date: '2018 July - August',
  figure: new Video({
    poster: citySimulationPoster,
    mp4: citySimulationMp4,
    webm: citySimulationWebM,
    altText: videoPosterAltText,
  }),
  description: 'Simulating a city where car crashes are more frequent than usual.',
  more: [
    'The state of the traffic lights can be changed through a REST API. Drivers follow the instructions of the traffic lights, so if a mistake is made, there will be collisions. There is also support for displaying tweets on a HUD.',
    'This was created for a cybersecurity challenge. With the help of this program the contestants could instantly see the effect of their work.',
    'The most interesting aspect of this project was building it in a server-client architecture. Every decision of the agents is calculated server-side. The real challenge was broadcasting these decisions in a fault-tolerant way using minimal bandwidth.',
    'It is made with Unity using C# as the scripting language. The models and animations were also made by me using Blender.',
  ],
  links: [],
};
