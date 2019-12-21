import { Footer } from "../../model/portfolio";
import "./footer.scss";
import { PageElement } from "../../framework/page-element";
import { createElement } from "../../framework/element-factory";

export class PageFooter extends PageElement {
  constructor({ email, cv }: Footer, cvName: string) {
    super();
    this.setElement(
      createElement(`
         <footer>
            <a id="email" href="mailto:${email}">${email}</a>
            <a id="email" href="mailto:${cv}">${cvName}</a>
        </footer>
    `)
    );
  }
}
