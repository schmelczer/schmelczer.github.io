import info from '../../../static/icons/info.svg';
import './timeline-element.scss';
import { html } from '../../../types/html';
import { TimelineElementParameters } from './timeline-element';

export const generate = (
  { date, title, more }: TimelineElementParameters,
  showMore: string
): html => {
  const id = titleToFragment(title);
  return `
  <section id="${id}" class="timeline-element">
    <div class="line-container">
      <div class="line"></div>
      <p class="date">${date}</p>
    </div>
    <div class="card">
      <div class="figure"></div>
      <div class="lower">
        <h2><a href="#${id}">${title}</a></h2>
        <p class="description"></p>
        ${more ? '<div class="more"></div>' : ''}
        <div class="buttons">
        ${
          more
            ? `
            <div tabindex=0 class="info-button">
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
};

const titleToFragment = (title: string): string =>
  encodeURIComponent(title.toLocaleLowerCase().replace(/\W+/g, '-'));
