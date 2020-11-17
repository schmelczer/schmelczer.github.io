export const sum = (list: ArrayLike<number>): number =>
  Array.prototype.reduce.call(list, (a: number, sum: number) => a + sum, 0);
