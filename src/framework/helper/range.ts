export const range = ({
  from = 0,
  to = Infinity,
  step = 1,
}: {
  from?: number;
  to?: number;
  step?: number;
}): Iterable<number> => {
  return {
    *[Symbol.iterator]() {
      for (let i = from; i < to; yield i, i += step) {}
    },
  };
};
