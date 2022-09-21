import towersJpeg from '../media/towers.png?format=jpg';
import towersWebP from '../media/towers.png?format=webp';

import { Image } from '../../page/basics/image/image';
import { Open, GitHub } from '../shared';
import { TimelineElementParameters } from '../../page/timeline/timeline-element/timeline-element';

export const towersTimelineElement: TimelineElementParameters = {
  title: `Towers tracking app`,
  date: `2019 August - September`,
  figure: new Image(towersWebP, towersJpeg, `a picture of the website`),
  description: `An aesthetic representation of your previous and current goals/tasks.`,
  more: [
    `
      This project served me with an opportunity to deepen my Angular knowledge. The most interesting aspect of it 
      (apart from designing and implementing the pleasing visuals) was coming up with its data structure and persistence.
      Finally, I decided on using a trie. Its properties make it fairly simple to find the difference between the server stored
      and client stored versions and then only send this delta through the network. Also, its immutable nature helped with
      the code quality as well.
    `,
    `
      In hindsight, I would certainly add some finishing touches to it. For instance, dark mode, a tutorial, and PWA features.
    `,
  ],
  links: [
    new GitHub('https://github.com/schmelczerandras/life-towers/'),
    new Open('https://towers.schmelczer.dev'),
  ],
};
