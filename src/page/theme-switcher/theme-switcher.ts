import { PageElement } from '../../framework/page-element';
import { createElement } from '../../framework/helper/create-element';
import { generate } from './theme-switcher.html';
import {
  isSystemLevelDarkModeEnabled,
  turnOnDarkMode,
  turnOnLightMode,
} from '../../framework/styles/dark-mode/dark-mode';
import {
  turnOffAnimations,
  turnOnAnimations,
} from '../../framework/styles/animations/animations';
import { OnLoadEvent } from '../../framework/events/concrete-events/on-load-event';
import { OnPageThemeChangedEvent } from '../../framework/events/concrete-events/on-page-theme-changed-event';
import { OptionalEvent } from '../../framework/events/optional-event';

export class PageThemeSwitcher extends PageElement {
  private static readonly LOCAL_STORAGE_KEY = 'dark-mode';

  public constructor() {
    super(createElement(generate()));

    const storedIsDark = PageThemeSwitcher.loadFromLocalStorage();
    const isDark = storedIsDark !== null ? storedIsDark : isSystemLevelDarkModeEnabled();

    if (isDark) {
      (this.element as HTMLInputElement).checked = true;
      turnOffAnimations();
      turnOnDarkMode();
      setTimeout(() => turnOnAnimations(), 0);
    } else {
      turnOnLightMode();
    }
    this.element.onchange = this.handleThemeChange.bind(this);
  }

  public handleOnLoadEvent(event: OnLoadEvent): OptionalEvent {
    this.handleThemeChange();
    return super.handleOnLoadEvent(event);
  }

  private handleThemeChange() {
    const isDark = (this.element as HTMLInputElement).checked;
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
      PageThemeSwitcher.LOCAL_STORAGE_KEY,
      JSON.stringify(darkModeEnabled)
    );
  }

  private static loadFromLocalStorage(): boolean | null {
    try {
      return JSON.parse(localStorage?.getItem(PageThemeSwitcher.LOCAL_STORAGE_KEY));
    } catch {
      return null;
    }
  }
}
