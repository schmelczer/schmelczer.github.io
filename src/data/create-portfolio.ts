import { PageBackground } from '../page/background/background';
import { Footer } from '../page/footer/footer.html';
import { PageHeader } from '../page/header/header';
import { PageImageViewer } from '../page/image-viewer/image-viewer';
import { Main } from '../page/main/main';
import { PageElement } from '../page/page-element';
import { PageTimeline } from '../page/timeline/timeline';
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

export const createPortfolio = (): Array<PageElement> => [
  new Main(
    new PageBackground(1, 1),
    new PageHeader({
      name: 'András Schmelczer',
      image: me,
      imageAltText: 'a picture of me',
      about: [
        "With more than six years of professional experience and a degree in Computer Science, I can confidently tackle any challenge regardless of its complexity. My interests span diverse areas, making me able to architect vast and sophisticated systems with a clear understanding. I'm keen on designing distributed systems, especially when AI/ML is involved.",
        "I'm excited to take my part in connecting people and providing them with AI/ML solutions along with the necessary computing capabilities which were unimaginable even a decade ago.",
        ' Discover some of my more interesting earlier projects. They are all listed below. Further information about me can be found at the bottom of the page.',
      ],
    }),
    new PageTimeline({
      showMoreText: 'Show details',
      showLessText: 'Show less',
      elements: [
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
      ],
    }),
    Footer({
      title: 'Learn more',
      links: [
        CV(cvEnglish),
        GitHubLink('https://github.com/schmelczer'),
        LinkedIn('https://www.linkedin.com/in/andras-schmelczer'),
        Email('mailto:andras@schmelczer.dev'),
      ],
      lastEditText: 'Last modified on ',
    })
  ),
  new PageImageViewer(),
];
