import { PageElement } from '../../framework/page-element';
import { createElement } from '../../framework/helper/create-element';
import { generate } from './theme-switcher.html';
import {
  isSystemLevelDarkModeEnabled,
  turnOnDarkMode,
  turnOnLightMode,
} from '../../framework/styles/dark-mode/dark-mode';
import { PageEvent, PageEventType } from '../../framework/events/page-event';
import { EventBroadcaster } from '../../framework/events/event-broadcaster';
import {
  turnOffAnimations,
  turnOnAnimations,
} from '../../framework/styles/animations/animations';

export class PageThemeSwitcher extends PageElement {
  private static readonly LOCAL_STORAGE_KEY = 'dark-mode';

  public constructor() {
    super(createElement(generate()));

    const storedIsDark = PageThemeSwitcher.loadFromLocalStorage();
    const isDark = storedIsDark ? storedIsDark : isSystemLevelDarkModeEnabled();

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

  protected handleEvent(event: PageEvent, parent: EventBroadcaster) {
    if (event.type === PageEventType.onLoad) {
      this.handleThemeChange();
    }
  }

  private handleThemeChange() {
    const isDark = (this.element as HTMLInputElement).checked;
    if (isDark) {
      turnOnDarkMode();
    } else {
      turnOnLightMode();
    }
    this.eventBroadcaster.broadcastEvent({
      type: PageEventType.pageThemeChanged,
      data: isDark,
    });

    PageThemeSwitcher.saveToLocalStorage(isDark);
  }

  private static saveToLocalStorage(darkModeEnabled: boolean) {
    window.localStorage?.setItem(
      PageThemeSwitcher.LOCAL_STORAGE_KEY,
      JSON.stringify(darkModeEnabled)
    );
  }

  private static loadFromLocalStorage(): boolean | null {
    try {
      return JSON.parse(
        window.localStorage?.getItem(PageThemeSwitcher.LOCAL_STORAGE_KEY)
      );
    } catch {
      return null;
    }
  }
}
