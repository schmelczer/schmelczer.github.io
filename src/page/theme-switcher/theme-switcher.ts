import { PageElement } from '../page-element';
import { createElement } from '../../helper/create-element';
import { generate } from './theme-switcher.html';
import {
  isSystemLevelDarkModeEnabled,
  turnOnDarkMode,
  turnOnLightMode,
} from '../../style/dark-mode/dark-mode';
import { turnOffAnimations, turnOnAnimations } from '../../style/animations/animations';
import { OnLoadEvent } from '../../events/concrete-events/on-load-event';
import { OptionalEvent } from '../../events/optional-event';
import { OnPageThemeChangedEvent } from '../../events/concrete-events/on-page-theme-changed-event';

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
  }

  public handleOnLoadEvent(event: OnLoadEvent): OptionalEvent {
    this.handleThemeChange();
    return super.handleOnLoadEvent(event);
  }

  private handleThemeChange() {
    const isDark = (this.htmlRoot as HTMLInputElement).checked;
    if (isDark) {
      turnOnDarkMode();
    } else {
      turnOnLightMode();
    }

    this.eventBroadcaster.broadcastEvent(new OnPageThemeChangedEvent(isDark));
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
      return JSON.parse(localStorage?.getItem(PageThemeSwitcher.localStorageKey));
    } catch {
      return null;
    }
  }
}
