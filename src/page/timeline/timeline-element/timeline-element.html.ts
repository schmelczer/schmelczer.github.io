import { TimelineElement } from '../../../types/portfolio';

import './timeline-element.scss';
import { html } from '../../../types/html';

export const generate = (
  { date, title, more }: TimelineElement,
  showMore: string,
  showLess: string
): html => `
    <section class="timeline-element">
        <div class="line-container">
            <div class="line"></div>
            <p class="date">${date}</p>
        </div>
        <div class="card">
            <h2>${title}</h2>
            <div class="figure"></div>
            <div class="description"></div>
            ${
              more
                ? `
                <div class="more"></div>
                <div class="buttons">
                    <a tabindex="0" class="show-more">${showMore}</a>
                    <a tabindex="0" class="show-less">${showLess}</a>
                </div>
                `
                : ''
            }
            <div class="link"></div>
        </div>
    </section>
`;
