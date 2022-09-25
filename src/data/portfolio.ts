import { Background } from '../page/background/background';
import { Footer } from '../page/footer/footer.html';
import { Header } from '../page/header/header';
import { ImageViewer } from '../page/image-viewer/image-viewer';
import { Main } from '../page/main/main';
import { PageElement } from '../page/page-element';
import { TimelineElement } from '../page/timeline-element/timeline-element';
import cvEnglish from './media/cv-andras-schmelczer.pdf';
import me from './media/me.jpg';
import { adAstra } from './projects/ad-astra';
import { citySimulation } from './projects/city-simulation';
import { declared } from './projects/declared';
import { forex } from './projects/forex';
import { greatAi } from './projects/great-ai';
import { leds } from './projects/leds';
import { myNotes } from './projects/my-notes';
import { nuclear } from './projects/nuclear';
import { nuclearEditor } from './projects/nuclear-editor';
import { photos } from './projects/photos';
import { platformGame } from './projects/platform-game';
import { sdf2d } from './projects/sdf2d';
import { towers } from './projects/towers';
import { CV, Email, GitHubLink, LinkedIn } from './shared';

export const portfolio: Array<PageElement> = [
  new Main(
    new Background(1, 1),
    new Header({
      name: 'András Schmelczer',
      image: me,
      imageAltText: 'a picture of me',
      about: [
        'With more than six years of professional software engineering experience and a degree in Computer Science, I can confidently undertake any challenge. My interests span diverse areas, allowing me to design complex &mdash; even multidisciplinary &mdash; systems with a clear understanding.',

        "I'm passionate about architecting and building large-scale systems, especially in the context of AI/ML. However, in my free time, I also enjoy working with shaders, data visualisation, and sometimes even microcontrollers.",

        "Discover some of my more exciting projects below. And if you'd like to reach out to me, you can find my contact details at the bottom of the page.",
      ],
    }),

    ...[
      greatAi,
      declared,
      sdf2d,
      adAstra,
      forex,
      myNotes,
      towers,
      nuclear,
      nuclearEditor,
      citySimulation,
      platformGame,
      photos,
      leds,
    ].map((p) => new TimelineElement(p, 'Show details', 'Show less')),

    Footer({
      title: 'Learn more',
      links: [
        CV(cvEnglish),
        GitHubLink('https://github.com/schmelczer'),
        LinkedIn('https://www.linkedin.com/in/andras-schmelczer'),
        Email('mailto:andras@schmelczer.dev'),
      ],
      lastEditText: 'Last modified on',
    })
  ),
  new ImageViewer(),
];
