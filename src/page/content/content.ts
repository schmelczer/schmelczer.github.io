import './content.scss';
import { PageElement } from '../../framework/page-element';
import { createElement } from '../../framework/helper/create-element';
import { Content } from '../../model/portfolio';

export class PageContent extends PageElement {
  public constructor(content: Content) {
    super(
      createElement(`
        <div class="content">
            ${content.map(element => element.toHTML()).join('\n')}
        </div>
      `)
    );
  }
}
