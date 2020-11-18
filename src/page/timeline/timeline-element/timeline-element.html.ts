import { TimelineElement } from '../../../types/portfolio';
import info from '../../../static/icons/info.svg';
import './timeline-element.scss';
import { html } from '../../../types/html';

export const generate = (
  { date, title, more }: TimelineElement,
  showMore: string
): html => `
  <section class="timeline-element">
    <div class="line-container">
      <div class="line"></div>
      <p class="date">${date}</p>
    </div>
    <div class="card">
      <div class="figure"></div>
      <div class="lower">
        <h2>${title}</h2>
        <div class="description"></div>
        ${more ? '<div class="more"></div>' : ''}
        <div class="buttons">
        ${
          more
            ? `
            <div class="info-button">
              <div class="svgContainer">${info}</div>
              <p>${showMore}</p>
            </div>`
            : ''
        }
        </div>
      </div>
    </div>
  </section>
`;
