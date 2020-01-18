export const sum = (list: ArrayLike<number>): number =>
  Array.prototype.reduce.call(list, (a, sum) => a + sum, 0);
