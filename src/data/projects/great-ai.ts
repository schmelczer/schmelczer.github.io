import { Image } from '../../page/image-viewer/image/image.html';
import { TimelineElementParameters } from '../../page/timeline-element/timeline-element-parameters';
import mscThesis from '../media/great-ai-andras-schmelczer.pdf';
import greatAiPoster from '../media/great-ai.png';
import { Open, PyPi, Thesis } from '../shared';

export const greatAi: TimelineElementParameters = {
  title: 'GreatAI',
  date: '2022',
  figure: Image({
    image: greatAiPoster,
    alt: 'some example code using GreatAI',
    container: true,
    isEagerLoaded: true,
  }),
  description:
    'I investigated an approach for increasing the adoption rate of ML deployment libraries and hence the overall quality of industrial deployments. I did this by simultaneously focusing on providing robust, automated implementations of best practices and an accessible API. One of the outcomes of my research is the GreatAI framework.',
  more: [
    'Applying AI is becoming increasingly more accessible, but many case studies have shown that these applications are often deployed poorly. This may lead to suboptimal performance and the introduction of unintended biases.',

    'My work presents 33 AI/ML deployment best practices (while introducing six new ones), the difficulties of implementing them, and ways to overcome these challenges. GreatAI helps implement these through an accessible interface.',

    'Feedback from professional data scientists and software engineers showed that ease of use and functionality are equally important in deciding to adopt deployment technologies, and the proposed framework was rated positively in both dimensions.',

    'For more details, visit the GitHub page or the paper.',
  ],
  links: [
    PyPi('https://pypi.org/project/great-ai/'),
    Thesis(mscThesis),
    Open('https://great-ai.scoutinscience.com'),
  ],
};
