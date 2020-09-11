import { TimelineElement } from '../../../model/portfolio';
import { html } from '../../../framework/model/misc';

import './timeline-element.scss';

export const generate = (
  { date, title, figure, description, more, link }: TimelineElement,
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
            ${figure.toHTML(true)}
            ${description.toHTML()}
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
            ${link ? link.toHTML() : ''}
        </div>
    </section>
`;
