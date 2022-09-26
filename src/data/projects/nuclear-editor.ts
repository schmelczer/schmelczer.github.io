import { Image } from '../../page/image-viewer/image/image.html';
import { TimelineElementParameters } from '../../page/timeline-element/timeline-element-parameters';
import nuclearEditorPoster from '../media/process-simulator-input.jpg';

export const nuclearEditor: TimelineElementParameters = {
  title: 'Graph editor &mdash; JavaFX',
  date: '2018 October - November',
  figure: Image({
    image: nuclearEditorPoster,
    alt: "a picture of the simulator's UI",
    container: true,
  }),
  description:
    'An intuitive editor to create and edit input for the nuclear facility simulator (see above).',
  more: [
    'Nodes can be moved with drag & drop gestures. Editing the parameters of elements can be done on the right panel.',

    'The UI is built with JavaFX. The output can be exported as JSON or directly uploaded to the simulation backend.',
  ],
  links: [],
};
