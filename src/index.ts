import './static/no-change/favicon.ico';
import './static/no-change/og-image.jpg';
import './static/no-change/robots.txt';
import './static/no-change/404.html';

import './styles.scss';
import { create } from './portfolio';

const initialize = () => {
  create();
  addSupportForTabNavigation();
  removeUnnecessaryOutlines();
};

const addSupportForTabNavigation = () =>
  (document.onkeydown = e => {
    if (e.key === ' ') {
      (document.activeElement as HTMLElement)?.click();
      e.preventDefault();
    }
  });

const removeUnnecessaryOutlines = () =>
  (document.onclick = e => {
    (e.target as HTMLElement)?.blur();
  });

initialize();
