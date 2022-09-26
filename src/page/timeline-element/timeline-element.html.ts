import info from '../../../static/icons/info.svg';
import { titleToFragment } from '../../helper/title-to-fragment';
import { html } from '../../types/html';
import { ImageButtonFactory } from '../image-button/image-button.html';
import { TimelineElementParameters } from './timeline-element-parameters';
import './timeline-element.scss';

export const generate = (
  { date, title, description, more, links }: TimelineElementParameters,
  showMore: string
): html => `
  <article id="${titleToFragment(title).replace('#', '')}" class="timeline-element">
    <div class="line-container">
      <div class="line"></div>
      <p class="date">${date}</p>
    </div>
    <div class="card">
      <div class="figure"></div>
      <div class="lower">
        <h2>
          <a href="${titleToFragment(title)}">${title}</a>
        </h2>

        <p class="description">${description}</p>

        ${
          more
            ? `
            <div class="more">
              ${more.map((t) => `<p>${t}</p>`).join('')}
            </div>`
            : ''
        }

        <div class="buttons">
        ${more ? ImageButtonFactory(info, showMore)() : ''}
        ${links.join('')}
        </div>
      </div>
    </div>
  </article>
`;
