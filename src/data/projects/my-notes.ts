import { BorderedImage } from '../../page/figure/bordered-image/bordered-image';
import { TimelineElementParameters } from '../../page/timeline-element/timeline-element-parameters';
import myNotesPoster from '../media/my-notes.png';
import { GitHub } from '../shared';

export const myNotes: TimelineElementParameters = {
  title: 'My Notes &mdash; Android app',
  date: 'November 2019',
  figure: new BorderedImage({
    image: myNotesPoster,
    alt: 'two screenshots of the application',
  }),
  description: 'A minimalist Android note organiser and editor powered by Markwon.',
  more: [
    'It is a basic app for creating and filtering markdown notes (based on #hashtags). It was my first exposure to Android development.',

    "All in all, it's not a unique idea, but at least it's functional and has exposed me to a wildly different paradigm than I was used to with full-stack web development. Thus, the knowledge I gained while working on it made its development a worthwhile adventure.",
  ],
  links: [GitHub('https://github.com/schmelczer/my-notes')],
};
