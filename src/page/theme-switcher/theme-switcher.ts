import { PageElement } from '../../framework/page-element';
import { createElement } from '../../framework/helper/create-element';
import { generate } from './theme-switcher.html';
import {
  isSystemLevelDarkModeEnabled,
  turnOnDarkMode,
  turnOnLightMode,
} from '../../framework/helper/dark-mode';
import { PageEvent, PageEventType } from '../../framework/page-event';
import { EventBroadcaster } from '../../framework/event-broadcaster';

export class PageThemeSwitcher extends PageElement {
  public constructor() {
    super(createElement(generate()));
    if (isSystemLevelDarkModeEnabled()) {
      (this.element as HTMLInputElement).checked = true;
    }
    this.element.onchange = this.handleThemeChange.bind(this);
  }

  protected handleEvent(event: PageEvent, parent: EventBroadcaster) {
    if (event.type === PageEventType.onLoad) {
      console.log('a');
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
  }
}
