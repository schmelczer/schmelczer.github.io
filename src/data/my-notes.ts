import myNotesJpeg from '../static/media/my-notes.png?format=jpg';
import myNotesWebP from '../static/media/my-notes.png?format=webp';

import { Image } from '../page/basics/image/image';
import { GitHub } from './shared';

export const myNotesTimelineElement = {
  date: `2019 November`,
  title: `My Notes`,
  figure: new Image(myNotesWebP, myNotesJpeg, `two screenshots of the application`),
  description: `A minimalist note organiser and editor powered by Markwon.`,
  more: [
    `
      This is a basic android app for creating and filtering markdown notes 
      (based on #hashtags). It was my first exposure to Android development.
    `,
    `
      All in all, it is not a tremendous engineering feat, but at least it's usable.
      The knowledge gained while working on it was the more significant outcome of this 
      adventure.
    `,
  ],
  links: [new GitHub('https://github.com/schmelczerandras/my-notes')],
};
