import './theme-switcher.scss';
import { html } from '../../types/html';

export const generate = (): html => `
   <input id="theme-switcher" aria-label="color-theme-switch" type="checkbox" name="switch-theme"/>
`;
