export const isSystemLevelDarkModeEnabled = (): boolean =>
  matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;

export const turnOnDarkMode = () =>
  document.body.parentElement.setAttribute('theme', 'dark');

export const turnOnLightMode = () =>
  document.body.parentElement.setAttribute('theme', 'light');
