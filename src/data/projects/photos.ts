import { BorderedImage } from '../../page/figure/bordered-image/bordered-image';
import { TimelineElementParameters } from '../../page/timeline-element/timeline-element-parameters';
import photosPoster from '../media/photos.jpg';
import { Open } from '../shared';

export const photos: TimelineElementParameters = {
  title: 'Photos',
  date: 'Summer 2016',
  figure: new BorderedImage({
    image: photosPoster,
    alt: 'a picture of the website',
  }),
  description: 'A simple webpage where you can view my photos.',
  more: [
    "Taking time to appreciate the world around us fills me with joy. That's why I like to go on walks with a camera. I might not end up with great photos. Nonetheless, I usually end up with some inspiration regarding my current or next project.",

    'As for the webpage, a Webpack script generates the site from the photos in a directory, automatic resizing to multiple quality settings is also part of the pipeline.',
  ],
  links: [Open('https://photo.schmelczer.dev')],
};
