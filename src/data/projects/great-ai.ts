import { Image } from '../../page/basics/image/image.html';
import { TimelineElementParameters } from '../../page/timeline/timeline-element/timeline-element-parameters';
import mscThesis from '../media/great-ai-andras-schmelczer.pdf';
import greatAi from '../media/great-ai.png';
import { Open, PyPi, Thesis } from '../shared';

export const greatAiTimelineElement: TimelineElementParameters = {
  title: `GreatAI`,
  date: `2022`,
  figure: Image({
    image: greatAi,
    alt: `some example code using GreatAI`,
    container: true,
  }),
  description: `
    I investigated an approach to increase the adoption rate of ML deployment libraries and hence the overall quality of deployed AI services in the industry. I did this by simultaneously focusing on providing robust, automated implementations of best practices and an accessible API. One of the outcomes of the research is the GreatAI framework.
  `,
  more: [
    `
     Applying AI is becoming increasingly more accessible, but many case studies have shown that these applications are often deployed poorly. This may lead to suboptimal performance and the introduction of unintended biases.
    `,
    `
      The research presents 33 AI/ML deployment best practices, the difficulties of implementing them, and ways to overcome these challenges. These target the transition from prototype AI code into production-ready software. GreatAI helps implement these best practices through an accessible interface.`,
    `
      Feedback from professional data scientists and software engineers showed that ease of use and functionality are equally important in deciding to adopt deployment technologies, and the proposed framework was rated positively in both dimensions.
    `,
    `
      For more details, checkout the GitHub page or the paper.
    `,
  ],
  links: [
    PyPi('https://pypi.org/project/great-ai/'),
    Thesis(mscThesis),
    Open('https://great-ai.scoutinscience.com'),
  ],
};
