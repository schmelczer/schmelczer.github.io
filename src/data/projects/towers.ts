import { BorderedImage } from '../../page/figure/bordered-image/bordered-image';
import { TimelineElementParameters } from '../../page/timeline-element/timeline-element-parameters';
import towersPoster from '../media/towers.png';
import { GitHub, Open } from '../shared';

export const towers: TimelineElementParameters = {
  title: 'Multi-device life tracking',
  date: '2019 August - September',
  figure: new BorderedImage({
    image: towersPoster,
    alt: 'a picture of the website',
  }),
  description: 'An aesthetic representation of your previous and current goals/tasks.',
  more: [
    'This project allowed me to deepen my Python &amp; Angular knowledge. The most exciting part of it &mdash; apart from designing and implementing the pleasing visuals &mdash; was coming up with its data structure and method of synchronising state between the clients and servers.',

    "In the end, I decided on using a trie. Its properties make it reasonably simple to find the difference between the server's and client's stored versions, reconcile the differences and then only send this delta through the network. Additionally, its immutable nature helped simplify much of the logic.",
  ],
  links: [
    GitHub('https://github.com/schmelczer/life-towers/'),
    Open('https://towers.schmelczer.dev'),
  ],
};
