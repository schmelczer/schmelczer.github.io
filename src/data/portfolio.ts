import { PageBackground } from '../page/background/background';
import { Image } from '../page/basics/image/image.html';
import { Footer } from '../page/footer/footer.html';
import { PageHeader } from '../page/header/header';
import { PageImageViewer } from '../page/image-viewer/image-viewer';
import { Main } from '../page/main/main';
import { PageElement } from '../page/page-element';
import { PageTimeline } from '../page/timeline/timeline';
import cvEnglish from './media/cv-andras-schmelczer.pdf';
import meWebP from './media/me.jpg?format=webp';
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
      photo: Image({
        imageWebP: meWebP,
        alt: `a picture of me`,
        imageScreenRatio: 0.3,
      }),
      about: [
        `
            I have always been fascinated by the engineering feats that surround us and pervade every aspect
            of our lives. When I realised I might someday be able to contribute to this field, I knew that
            this would become my life's ambition. 
            As I am starting my third semester at Leiden University,
            I feel I am getting closer to my ambition every day.
          `,
        `
            Discover some of my more interesting projects. They are all listed below.
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
      // @ts-ignore: injected by webpack
      lastEdit: new Date(__CURRENT_DATE__),
    })
  ),
  new PageImageViewer(),
];
