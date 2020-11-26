import meJpeg from './static/media/me.jpg?format=jpg';
import meWebP from './static/media/me.jpg?format=webp';
import cvEnglish from './static/media/cv_andras_schmelczer.pdf';

import { PageFooter } from './page/footer/footer';
import { Image } from './page/basics/image/image';
import { PageHeader } from './page/header/header';
import { PageTimeline } from './page/timeline/timeline';
import { PageImageViewer } from './page/image-viewer/image-viewer';
import { PageBackground } from './page/background/background';
import { Main } from './page/main/main';
import { Body } from './page/body/body';
import { declaredTimelineElement } from './data/declared';
import { sdf2dTimelineElement } from './data/sdf2d';
import { adAstraTimelineElement } from './data/ad-astra';
import { forexTimelineElement } from './data/forex';
import { myNotesTimelineElement } from './data/my-notes';
import { nuclearTimelineElement } from './data/nuclear';
import { nuclearEditorTimelineElement } from './data/nuclear-editor';
import { citySimulationTimelineElement } from './data/city-simulation';
import { colorsTimelineElement } from './data/colors';
import { platformGameTimelineElement } from './data/platform-game';
import { photosTimelineElement } from './data/photos';
import { ledsTimelineElement } from './data/leds';

export const create = () => {
  new Body(
    new Main(
      new PageBackground(1, 1),
      new PageHeader({
        name: `András Schmelczer`,
        photo: new Image(meWebP, meJpeg, `a picture of me`, false),
        about: [
          `
            I have always been fascinated by the engineering feats that surround us and pervade every aspect
            of our lives. When I realised I might someday be able to contribute to this field, I knew that
            this would become my life’s ambition. 
            As I am finishing my last semester at the Budapest University of Technology and Economics, 
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
          declaredTimelineElement,
          sdf2dTimelineElement,
          adAstraTimelineElement,
          forexTimelineElement,
          myNotesTimelineElement,
          nuclearTimelineElement,
          nuclearEditorTimelineElement,
          citySimulationTimelineElement,
          colorsTimelineElement,
          platformGameTimelineElement,
          photosTimelineElement,
          ledsTimelineElement,
        ],
      }),
      new PageFooter({
        title: `Learn more`,
        curriculaVitae: [{ name: `Curriculum vitae`, url: cvEnglish }],
        email: `andras@schmelczer.dev`,
        lastEditText: `Last modified on `,
        // @ts-ignore: injected by webpack
        lastEdit: new Date(__CURRENT_DATE__),
      })
    ),
    new PageImageViewer()
  );
};
