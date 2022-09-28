export const titleToFragment = (title: string): string =>
  '#' +
  encodeURIComponent(
    title.toLocaleLowerCase().replace(/&.*?;/g, '').replace(/\W+/g, '-')
  );
