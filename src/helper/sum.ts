export const sum = (list: ArrayLike<number>): number =>
  // @ts-ignore
  Array.prototype.reduce.call(list, (a: number, sum: number) => a + sum, 0);
