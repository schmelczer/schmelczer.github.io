import { Header } from "../../model/portfolio";
import { html } from "../../model/misc";
import "./about.scss";

export const generate = (
  { name, picture, about }: Header,
  aPictureOf: string
): html => `
    <section id="about">
        <img alt="${aPictureOf} ${name}" src="${picture}"/>
        <h1>${name}</h1>
    </section>`;
