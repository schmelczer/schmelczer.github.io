import processSimulatorInputJpeg from '../static/media/process-simulator-input.jpg?format=jpg';
import processSimulatorInputWebP from '../static/media/process-simulator-input.jpg?format=webp';

import { Image } from '../page/basics/image/image';

export const nuclearEditorTimelineElement = {
  title: `Graph editing application`,
  date: `2018 October - November`,
  figure: new Image(
    processSimulatorInputWebP,
    processSimulatorInputJpeg,
    `a picture of the simulator's UI`
  ),
  description: `
    An intuitive editor to create and edit input for the nuclear facility simulator.
  `,
  more: [
    `
      Nodes can be moved with drag & drop gestures. 
      Editing the parameters of elements can be done on the right panel.
    `,
    `
      The UI is built with JavaFX. The output can be exported as JSON or 
      directly uploaded to the simulation backend.
    `,
  ],
  links: [],
};
