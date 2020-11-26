import { ImageAnchorFactory } from '../page/basics/image-anchor/image-anchor';

import githubIcon from '../static/icons/github.svg';
import openIcon from '../static/icons/open.svg';
import cvIcon from '../static/icons/cv.svg';
import packageIcon from '../static/icons/package.svg';

export const GitHub = ImageAnchorFactory(githubIcon, 'Open on GitHub');
export const NPM = ImageAnchorFactory(packageIcon, 'Open on npm');
export const Open = ImageAnchorFactory(openIcon, 'Open in new tab');
export const Thesis = ImageAnchorFactory(cvIcon, 'Download thesis');
