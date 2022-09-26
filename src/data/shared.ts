import cvIcon from '../../static/icons/cv.svg';
import emailIcon from '../../static/icons/email.svg';
import gitHubIcon from '../../static/icons/github.svg';
import linkedInIcon from '../../static/icons/linkedin.svg';
import openIcon from '../../static/icons/open.svg';
import packageIcon from '../../static/icons/package.svg';
import pythonIcon from '../../static/icons/python.svg';
import youtubeIcon from '../../static/icons/youtube.svg';
import { ImageAnchorFactory } from '../page/image-anchor/image-anchor.html';
import { ImageButtonFactory } from '../page/image-button/image-button.html';

export const GitHub = ImageButtonFactory(gitHubIcon, 'Open on GitHub');
export const NPM = ImageButtonFactory(packageIcon, 'Open on NPM');
export const PyPi = ImageButtonFactory(pythonIcon, 'Open on PyPI');
export const Open = ImageButtonFactory(openIcon, 'Open in new tab');
export const Thesis = ImageButtonFactory(cvIcon, 'Download thesis', {
  shouldDownload: true,
});
export const Youtube = ImageButtonFactory(youtubeIcon, 'Open on YouTube');

export const CV = ImageAnchorFactory(cvIcon, 'Download my CV', { shouldDownload: true });
export const GitHubLink = ImageAnchorFactory(gitHubIcon, 'Find me on GitHub');
export const LinkedIn = ImageAnchorFactory(linkedInIcon, 'Find me on LinkedIn');
export const Email = ImageAnchorFactory(emailIcon, 'andras@schmelczer.dev');

export const videoPosterAltText = 'thumbnail for the video';
