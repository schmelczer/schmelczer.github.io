import { Image } from '../../page/basics/image/image.html';
import { TimelineElementParameters } from '../../page/timeline/timeline-element/timeline-element-parameters';
import processSimulator from '../media/process-simulator.jpg';

export const nuclearTimelineElement: TimelineElementParameters = {
  title: `Simulating the cooling system of a nuclear facility`,
  date: `2018 October - November`,
  figure: Image({
    image: processSimulator,
    alt: `a screenshot of the simulator`,
    container: true,
  }),
  description: `
    The temperatures and flow velocities are dynamically calculated in a fluid-based 
    cooling system based on a simple model.
  `,
  more: [
    `
      A simulated system can contain reactors (heaters), coolers, pumps, heat exchangers,
      drains, sources, and of course, pipes. With this, simple yet believable configurations
      can be defined. The aim of the project was to create a cheaply calculated and 
      (for layman) a convincingly looking simulation.
    `,
    `
      The algorithm takes advantages of graphs and matrices to get to a next time frame. First,
      water flows are distributed by traversing the graph of pipes. Then a matrix is populated
      with the relations of the nodes (based on the water flow between them). 
      After considering the base temperatures and heaters, the matrix is solved resulting in the
      current temperature of each node. This can be iteratively continued. 
    `,
    `
      Python is used for the backend along with Flask and NumPy. A REST API facilitates 
      the communication between the layers. For rendering on the frontend, a HTML5 canvas 
      is utilised.
    `,
  ],
  links: [],
};
