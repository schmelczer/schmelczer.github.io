import { html } from '../../model/misc';

import './theme-switcher.scss';

export const generate = (): html => `
   <input id="theme-switcher" type="checkbox" name="switch-theme"/>
`;
