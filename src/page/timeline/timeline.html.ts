import { html } from '../../framework/model/misc';
import './timeline.scss';

export const generate = (): html => `
    <div id="timeline"></div> <!-- IE11 doesn't know <main> -->
`;
