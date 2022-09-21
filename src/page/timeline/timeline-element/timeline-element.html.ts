import info from '../../../../static/icons/info.svg';
import { titleToFragment } from '../../../helper/title-to-fragment';
import { html } from '../../../types/html';
import { TimelineElementParameters } from './timeline-element';
import './timeline-element.scss';

export const generate = (
  { date, title, description, more }: TimelineElementParameters,
  showMore: string
): html => `
  <section id="${titleToFragment(title)}" class="timeline-element">
    <div class="line-container">
      <div class="line"></div>
      <p class="date">${date}</p>
    </div>
    <div class="card">
      <div class="figure"></div>
      <div class="lower">
        <h2>
          <a href="#${titleToFragment(title)}">${title}</a>
        </h2>

        <p class="description">${description}</p>

        ${more ? '<div class="more"></div>' : ''}

        <div class="buttons">
        ${
          more &&
          `<div tabindex=0 class="info-button">
              <div class="svgContainer">${info}</div>
              <p>${showMore}</p>
            </div>`
        }
        </div>
      </div>
    </div>
  </section>
`;
