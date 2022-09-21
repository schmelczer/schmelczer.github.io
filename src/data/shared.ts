import cvIcon from '../../static/icons/cv.svg';
import githubIcon from '../../static/icons/github.svg';
import openIcon from '../../static/icons/open.svg';
import packageIcon from '../../static/icons/package.svg';
import pythonIcon from '../../static/icons/python.svg';
import youtubeIcon from '../../static/icons/youtube.svg';
import { ImageAnchorFactory } from '../page/basics/image-anchor/image-anchor';

export const GitHub = ImageAnchorFactory(githubIcon, 'Open on GitHub');
export const NPM = ImageAnchorFactory(packageIcon, 'Open on npm');
export const PyPi = ImageAnchorFactory(pythonIcon, 'Open on PyPi');
export const Open = ImageAnchorFactory(openIcon, 'Open in new tab');
export const Thesis = ImageAnchorFactory(cvIcon, 'Download thesis', {
  shouldDownload: true,
});
export const Youtube = ImageAnchorFactory(youtubeIcon, 'Open on YouTube');
