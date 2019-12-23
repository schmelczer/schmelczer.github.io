import { Portfolio } from "../model/portfolio";
import { PageElement } from "../framework/page-element";
import { PageBackground } from "./background/background";
import { PageMain } from "./main/main";

export const create = (portfolio: Portfolio) => {
  document.title = portfolio.header.name;

  const pageElements: Array<PageElement> = [
    new PageBackground(0.1, 200, 140, 0.4, "#fff9e0aa", -15),
    new PageBackground(0.15, 300, 80, 0.3, "#ffd6d6aa", -10),
    new PageMain(portfolio)
  ];

  const root = document.body.querySelector("main");
  root.append(...pageElements.map(e => e.getElement()));
  pageElements.forEach(e => e.onAfterLoad(root));
};
