import { Image } from '../../page/image-viewer/image/image.html';
import { TimelineElementParameters } from '../../page/timeline-element/timeline-element-parameters';
import myNotesPoster from '../media/my-notes.png';
import { GitHub } from '../shared';

export const myNotes: TimelineElementParameters = {
  title: 'My Notes',
  date: '2019 November',
  figure: Image({
    image: myNotesPoster,
    alt: 'two screenshots of the application',
    container: true,
  }),
  description: 'A minimalist note organiser and editor powered by Markwon.',
  more: [
    'This is a basic android app for creating and filtering markdown notes (based on #hashtags). It was my first exposure to Android development.',

    "All in all, it is not a tremendous engineering feat, but at least it's usable. The knowledge gained while working on it was the more significant outcome of this adventure.",
  ],
  links: [GitHub('https://github.com/schmelczer/my-notes')],
};
