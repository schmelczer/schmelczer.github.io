import { TimelineElement } from "../../../../model/portfolio";
import { html } from "../../../../model/misc";
import "./timeline-element.scss";

export const generate = (
  { date, title, picture, description, more, link }: TimelineElement,
  showMore: string,
  showLess: string
): html => `
    <section class="timeline-element">
        <div class="line">
            <p class="date-wide-screen">${date}</p>
        </div>
        <div class="card">
            <h2>${title}</h2>
            <p class="date-narrow-screen">${date}</p>
            <img src="${picture}" alt="${picture}"/>
            <p class="description">${description}</p>
            ${
              more
                ? `
                <div id="more"></div>
                <div class="buttons">
                    <a id="show-more">${showMore}</a>
                    <a id="show-less">${showLess}</a>
                </div>
                `
                : ""
            }
            ${
              link
                ? `
                <a href="${link}" target="_blank">${link}</a>`
                : ""
            }
        </div>
    </section>
`;
