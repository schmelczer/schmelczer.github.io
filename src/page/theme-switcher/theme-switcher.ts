import { createElement } from '../../helper/create-element';
import { turnOffAnimations, turnOnAnimations } from '../../style/animations/animations';
import {
  isSystemLevelDarkModeEnabled,
  turnOnDarkMode,
  turnOnLightMode,
} from '../../style/dark-mode/dark-mode';
import { PageElement } from '../page-element';
import { generate } from './theme-switcher.html';

export class PageThemeSwitcher extends PageElement {
  private static readonly localStorageKey = 'dark-mode';

  public constructor() {
    super(createElement(generate()));

    const storedIsDark = PageThemeSwitcher.loadFromLocalStorage();
    const isDark = storedIsDark !== null ? storedIsDark : isSystemLevelDarkModeEnabled();

    if (isDark) {
      (this.htmlRoot as HTMLInputElement).checked = true;
      turnOffAnimations();
      turnOnDarkMode();
      turnOnAnimations();
    } else {
      turnOnLightMode();
    }

    this.htmlRoot.onchange = this.handleThemeChange.bind(this);

    this.handleThemeChange();
  }

  private handleThemeChange() {
    const isDark = (this.htmlRoot as HTMLInputElement).checked;
    if (isDark) {
      turnOnDarkMode();
    } else {
      turnOnLightMode();
    }

    PageThemeSwitcher.saveToLocalStorage(isDark);
  }

  private static saveToLocalStorage(darkModeEnabled: boolean) {
    localStorage?.setItem(
      PageThemeSwitcher.localStorageKey,
      JSON.stringify(darkModeEnabled)
    );
  }

  private static loadFromLocalStorage(): boolean | null {
    try {
      return JSON.parse(localStorage!.getItem(PageThemeSwitcher.localStorageKey)!);
    } catch {
      return null;
    }
  }
}
