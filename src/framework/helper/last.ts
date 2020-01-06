export const last = <T>(list: Array<T>): T =>
  list.length >= 1 ? list[list.length - 1] : undefined;
