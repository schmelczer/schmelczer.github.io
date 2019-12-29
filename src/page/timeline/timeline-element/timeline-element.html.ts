import { TimelineElement } from "../../../model/portfolio";
import { html } from "../../../model/misc";
import "./timeline-element.scss";

export const generate = (
  { date, title, picture, description, more, link }: TimelineElement,
  showMore: string,
  showLess: string
): html => `
    <section class="timeline-element">
        <div class="line">
            <p class="date">${date}</p>
        </div>
        <div class="card">
            <h2>${title}</h2>
            <div class="image-container">
                <img src="${picture}" alt="${picture}"/>
            </div>
            <p class="description">${description}</p>
            ${
              more
                ? `
                <div class="more"></div>
                <div class="buttons">
                    <a class="show-more">${showMore}</a>
                    <a class="show-less">${showLess}</a>
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
