export const isSystemLevelDarkModeEnabled = (): boolean =>
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

export const turnOnDarkMode = () =>
  document.body.parentElement.setAttribute('theme', 'dark');

export const turnOnLightMode = () =>
  document.body.parentElement.setAttribute('theme', 'light');
