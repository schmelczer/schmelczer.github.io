import { TimelineElement } from "../../../model/portfolio";
import { html } from "../../../model/misc";
import { PageContent } from "../../content/content";

import "./timeline-element.scss";

export const generate = (
  { date, title, figure, description, more, link }: TimelineElement,
  showMore: string,
  showLess: string
): html => `
    <section class="timeline-element">
        <div class="line">
            <p class="date">${date}</p>
        </div>
        <div class="card">
            <h2>${title}</h2>
            ${PageContent.parseTypedContent(figure)}
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
            ${link ? PageContent.parseTypedContent(link) : ""}
        </div>
    </section>
`;
