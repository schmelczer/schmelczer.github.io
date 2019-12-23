import { Footer } from "../../model/portfolio";
import { html } from "../../model/misc";

export const generate = ({ email, cv }: Footer, cvName: string): html => `
    <footer>
        <a id="email" href="mailto:${email}">${email}</a>
        <a id="cv" href="mailto:${cv}">${cvName}</a>
    </footer>
`;
