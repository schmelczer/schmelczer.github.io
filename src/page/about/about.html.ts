import { Header } from "../../model/portfolio";
import { html } from "../../model/misc";
import { PageContent } from "../content/content";

import "./about.scss";

export const generate = ({ name, picture }: Header): html => `
    <section id="about">
        ${PageContent.parseTypedContent(picture, true)}
        <div class="placeholder"></div>
        <h1>${name}</h1>
    </section>`;
