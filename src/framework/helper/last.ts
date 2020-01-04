export const last = <T>(list: Array<T>): T =>
  list.length > 0 ? list[list.length - 1] : undefined;
