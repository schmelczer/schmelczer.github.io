import { PageContent } from '../content/content';
import { Header } from '../../model/portfolio';
import { PageElement } from '../../framework/page-element';

import { generate } from './about.html';
import { createElement } from '../../framework/helper/create-element';
import { ContainerPage } from '../../framework/container-page';

export class PageHeader extends ContainerPage {
  public constructor(header: Header) {
    super(createElement(generate(header)), [new PageContent(header.about)]);
  }
}
