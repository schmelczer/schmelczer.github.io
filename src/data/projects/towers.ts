import { Image } from '../../page/basics/image/image.html';
import { TimelineElementParameters } from '../../page/timeline/timeline-element/timeline-element-parameters';
import towers from '../media/towers.png';
import { GitHub, Open } from '../shared';

export const towersTimelineElement: TimelineElementParameters = {
  title: `Towers tracking app`,
  date: `2019 August - September`,
  figure: Image({
    image: towers,
    alt: `a picture of the website`,
    container: true,
  }),
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
    GitHub('https://github.com/schmelczerandras/life-towers/'),
    Open('https://towers.schmelczer.dev'),
  ],
};
