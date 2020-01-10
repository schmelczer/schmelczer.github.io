import { Content } from '../../model/portfolio';
import { html } from '../../framework/model/misc';

import './content.scss';

export const generate = (content: Content): html => `
    <div class="content">
        ${content.map(element => element.toHTML()).join('\n')}
    </div>
`;
