import photosJpeg from '../static/media/photos.jpg?format=jpg';
import photosWebP from '../static/media/photos.jpg?format=webp';

import { Image } from '../page/basics/image/image';
import { Open } from './shared';

export const photosTimelineElement = {
  title: `Photos`,
  date: `2016 summer`,
  figure: new Image(photosWebP, photosJpeg, `a picture of the website`),
  description: `A simple webpage where you can view my photos.`,
  more: [
    `
      Taking time to appreciate the world around us fills me with joy. That's why I like
      to go on walks with a camera. I might not end up with great photos, nonetheless, I usually
      end up with some inspiration regarding my current or next project.
    `,
    `
      As for the webpage, a webpack script generates the site from the photos in a directory,
      automatic resizing to multiple quality settings is also part of the pipeline.
    `,
  ],
  links: [new Open('https://photo.schmelczer.dev')],
};
