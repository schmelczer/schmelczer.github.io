import photosJpeg from '../static/media/photos.jpg?format=jpg';
import photosWebP from '../static/media/photos.jpg?format=webp';

import { Image } from '../page/basics/image/image';
import { Open } from './shared';

export const photosTimelineElement = {
  date: `2016 summer`,
  title: `Photos`,
  figure: new Image(photosWebP, photosJpeg, `a picture of the website`),
  description: `A simple web page where you can view my photos.`,
  links: [new Open('https://photo.schmelczer.dev')],
};
