import { html } from '../../model/misc';
import cancel from '../../static/icons/cancel.svg';

import './image-viewer.scss';

export const generate = (): html => `
    <section id="image-viewer">
        <div id="container"></div>
        <img id="cancel" src="${cancel}" alt="cancel"/>
    </section>
`;
