export const isSystemLevelDarkModeEnabled = (): boolean =>
  matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;

export const turnOnDarkMode = () =>
  document.documentElement.setAttribute('theme', 'dark');

export const turnOnLightMode = () =>
  document.documentElement.setAttribute('theme', 'light');
