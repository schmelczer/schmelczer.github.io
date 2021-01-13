import colourJpeg from '../static/media/color.jpg?format=jpg';
import colourWebP from '../static/media/color.jpg?format=webp';

import { Image } from '../page/basics/image/image';

export const colorsTimelineElement = {
  date: `2018 June`,
  title: `Photo colour grader`,
  figure: new Image(colourWebP, colourJpeg, `a picture of the app`),
  description: `An innovative (at least I thought so) colour grader web application.`,
  more: [
    `
      The most noteworthy feature of this application is the colour selector UI. 
      This program is only intended as a proof-of-concept, I would have liked to
      experiment with some ideas and this was the outcome.
    `,
    `
      You can select some colours and then apply transformations to the other colours as a 
      function of their distance to the selected colour.
    `,
    `
      By clicking on a coloured circle you can change its settings. 
      New circles can be created by clicking in the large circle 
      (and they can also be moved by drag & drop).
    `,
  ],
};
