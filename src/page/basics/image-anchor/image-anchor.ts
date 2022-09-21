import { PageElement } from '../../page-element';
import { createElement } from '../../../helper/create-element';
import { url } from '../../../types/url';
import { generate } from './image-anchor.html';

export const ImageAnchorFactory = (
  svg: string,
  title: string,
  { shouldDownload = false }: { shouldDownload?: boolean } = {}
) =>
  class ImageAnchor extends PageElement {
    public constructor(href: url) {
      super(createElement(generate({ href, svg, title, shouldDownload })));
    }
  };
