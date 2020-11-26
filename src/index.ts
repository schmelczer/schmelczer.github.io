import './static/no-change/og-image.jpg';
import './static/no-change/robots.txt';
import './static/no-change/404.html';
import './static/no-change/favicons/android-chrome-192x192.png';
import './static/no-change/favicons/android-chrome-512x512.png';
import './static/no-change/favicons/apple-touch-icon.png';
import './static/no-change/favicons/favicon-16x16.png';
import './static/no-change/favicons/favicon-32x32.png';
import './static/no-change/favicons/favicon.ico';
import './static/no-change/favicons/site.webmanifest';
import './styles.scss';
import { create } from './portfolio';

const addSupportForTabNavigation = () =>
  document.addEventListener('keydown', e => {
    if (e.key === ' ') {
      (document.activeElement as HTMLElement)?.click();
      e.preventDefault();
    }
  });

const removeUnnecessaryOutlines = () =>
  document.addEventListener('click', () =>
    (document.activeElement as HTMLElement).blur?.()
  );

// it might be necessary when the page takes too long to load
const scrollToFragment = () => {
  if (location.hash) {
    document.getElementById(location.hash.slice(1))?.scrollIntoView();
  }
};

addSupportForTabNavigation();
removeUnnecessaryOutlines();

create();

scrollToFragment();
