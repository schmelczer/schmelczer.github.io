import { Header } from '../../model/portfolio';
import { html } from '../../framework/model/misc';

import './about.scss';

export const generate = ({ name, picture }: Header): html => `
    <section id="about">
        ${picture.toHTML(true)}
        <div class="placeholder"></div>
        <h1>${name}</h1>
    </section>
`;
