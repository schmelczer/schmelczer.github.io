export const titleToFragment = (title: string): string =>
  encodeURIComponent(title.toLocaleLowerCase().replace(/\W+/g, '-'));
