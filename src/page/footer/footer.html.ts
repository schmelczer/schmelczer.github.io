import { Footer } from "../../model/portfolio";
import { html } from "../../model/misc";
import "./footer.scss";

export const generate = ({ email, cv }: Footer, cvName: string): html => `
    <footer id="page-footer">
        <a id="email" href="mailto:${email}">${email}</a>
        <a id="cv" href="mailto:${cv}">${cvName}</a>
    </footer>
`;
