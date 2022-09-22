import { PageBackground } from '../page/background/background';
import { Footer } from '../page/footer/footer.html';
import { PageHeader } from '../page/header/header';
import { PageImageViewer } from '../page/image-viewer/image-viewer';
import { Main } from '../page/main/main';
import { PageElement } from '../page/page-element';
import { PageTimeline } from '../page/timeline/timeline';
import cvEnglish from './media/cv-andras-schmelczer.pdf';
import me from './media/me.jpg';
import { adAstraTimelineElement } from './projects/ad-astra';
import { citySimulationTimelineElement } from './projects/city-simulation';
import { declaredTimelineElement } from './projects/declared';
import { forexTimelineElement } from './projects/forex';
import { greatAiTimelineElement } from './projects/great-ai';
import { ledsTimelineElement } from './projects/leds';
import { myNotesTimelineElement } from './projects/my-notes';
import { nuclearTimelineElement } from './projects/nuclear';
import { nuclearEditorTimelineElement } from './projects/nuclear-editor';
import { photosTimelineElement } from './projects/photos';
import { platformGameTimelineElement } from './projects/platform-game';
import { sdf2dTimelineElement } from './projects/sdf2d';
import { towersTimelineElement } from './projects/towers';

export const create = (): Array<PageElement> => [
  new Main(
    new PageBackground(1, 1),
    new PageHeader({
      name: `András Schmelczer`,
      image: me,
      imageAltText: `a picture of me`,
      about: [
        `
          With more than six years of professional experience and a degree in Computer Science, I can confidently tackle any challenge regardless of its complexity. My interests span diverse areas, making me able to architect vast and sophisticated systems with a clear understanding. I'm keen on designing distributed systems, especially when AI/ML is involved.
        `,
        `
          I'm excited to take my part in connecting people and providing them with AI/ML solutions along with the necessary computing capabilities which were unimaginable even a decade ago.
        `,
        `
          Discover some of my more interesting earlier projects. They are all listed below.
          Further information about me can be found at the bottom of the page.
        `,
      ],
    }),
    new PageTimeline({
      showMoreText: `Show details`,
      showLessText: `Show less`,
      elements: [
        greatAiTimelineElement,
        declaredTimelineElement,
        sdf2dTimelineElement,
        adAstraTimelineElement,
        forexTimelineElement,
        myNotesTimelineElement,
        towersTimelineElement,
        nuclearTimelineElement,
        nuclearEditorTimelineElement,
        citySimulationTimelineElement,
        platformGameTimelineElement,
        photosTimelineElement,
        ledsTimelineElement,
      ],
    }),
    Footer({
      title: `Learn more`,
      curriculaVitae: [{ name: `Curriculum vitae`, url: cvEnglish }],
      email: `andras@schmelczer.dev`,
      linkedin: `https://www.linkedin.com/in/andras-schmelczer-35487017b`,
      lastEditText: `Last modified on `,
    })
  ),
  new PageImageViewer(),
];
