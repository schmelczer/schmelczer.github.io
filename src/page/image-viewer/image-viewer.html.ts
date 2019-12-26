import { html } from "../../model/misc";
import cancel from "../../static/icons/cancel.svg";
import "./image-viewer.scss";

export const generate = (): html => `
    <section id="image-viewer">
        <img id="photo" alt="currently opened photo"/>
        <img id="cancel" src="${cancel}" alt="cancel"/>
    </section>
`;
