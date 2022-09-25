import '../static/no-change/404.html';
import '../static/no-change/favicons/android-chrome-192x192.png';
import '../static/no-change/favicons/android-chrome-512x512.png';
import '../static/no-change/favicons/apple-touch-icon.png';
import '../static/no-change/favicons/favicon-16x16.png';
import '../static/no-change/favicons/favicon-32x32.png';
import '../static/no-change/favicons/favicon.ico';
import '../static/no-change/favicons/site.webmanifest';
import '../static/no-change/og-image.jpg';
import '../static/no-change/robots.txt';
import { createPortfolio } from './data/create-portfolio';
import {
  addSupportForTabNavigation,
  removeUnnecessaryOutlines,
} from './helper/accessibility';
import { scrollToFragment } from './helper/scroll-to-fragment';
import './index.scss';

addSupportForTabNavigation();
removeUnnecessaryOutlines();
createPortfolio().forEach((e) => e.attachToDOM(document.body));
scrollToFragment();
