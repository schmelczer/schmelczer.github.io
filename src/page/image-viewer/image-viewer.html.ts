import cancel from '../../static/icons/cancel.svg';

import './image-viewer.scss';
import { html } from '../../types/html';

export const generate = (): html => `
    <section id="image-viewer">
        <div id="container"></div>
        <img tabindex="0" id="cancel" src="${cancel}" alt="cancel"/>
    </section>
`;
