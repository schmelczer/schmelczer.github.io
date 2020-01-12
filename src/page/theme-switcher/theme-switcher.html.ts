import { html } from '../../framework/model/misc';

import './theme-switcher.scss';

export const generate = (): html => `
   <input id="theme-switcher" aria-label="color-theme-switch" type="checkbox" name="switch-theme"/>
`;
