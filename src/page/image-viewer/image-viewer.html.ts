import { html } from "../../model/misc";
import cancel from "../../static/icons/cancel.svg";

export const generate = (): html => `
    <section class="photo-viewer">
        <img id="photo" alt="currently opened photo"/>
        <img id="cancel" src="${cancel}" alt="cancel"/>
    </section>
`;
