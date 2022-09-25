import { PageElement } from '../../page-element';
import { generate } from './theme-switcher.html';

export class ThemeSwitcher extends PageElement {
  private static readonly localStorageKey = 'dark-mode';

  public constructor() {
    super(generate());

    const storedIsDark = ThemeSwitcher.loadFromLocalStorage();
    const isDark = storedIsDark ?? isSystemLevelDarkModeEnabled();

    if (isDark) {
      (this.htmlRoot as HTMLInputElement).checked = true;
      turnOffAnimations();
      turnOnDarkMode();
      setTimeout(turnOnAnimations, 0);
    } else {
      turnOnLightMode();
    }

    this.htmlRoot.onchange = this.handleThemeChange.bind(this);
  }

  private handleThemeChange() {
    const isDark = (this.htmlRoot as HTMLInputElement).checked;
    if (isDark) {
      turnOnDarkMode();
    } else {
      turnOnLightMode();
    }

    ThemeSwitcher.saveToLocalStorage(isDark);
  }

  private static saveToLocalStorage(darkModeEnabled: boolean) {
    localStorage?.setItem(ThemeSwitcher.localStorageKey, JSON.stringify(darkModeEnabled));
  }

  private static loadFromLocalStorage(): boolean | null {
    try {
      return JSON.parse(localStorage!.getItem(ThemeSwitcher.localStorageKey)!);
    } catch {
      return null;
    }
  }
}

export const isSystemLevelDarkModeEnabled = (): boolean =>
  matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;

export const turnOnDarkMode = () =>
  document.documentElement.setAttribute('theme', 'dark');

export const turnOnLightMode = () =>
  document.documentElement.setAttribute('theme', 'light');

export const turnOnAnimations = () =>
  document.documentElement.setAttribute('animations', 'on');

export const turnOffAnimations = () =>
  document.documentElement.setAttribute('animations', 'off');
