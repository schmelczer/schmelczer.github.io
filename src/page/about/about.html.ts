import { Header } from '../../types/portfolio';

import './about.scss';
import { html } from '../../types/html';

export const generate = ({ name }: Header): html => `
    <section id="about">
        <div class="picture"></div>
        <div class="placeholder"></div>
        <h1>${name}</h1>
    </section>
`;
