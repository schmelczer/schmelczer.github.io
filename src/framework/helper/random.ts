export class Random {
  public constructor(private seed: number) {}

  public get next(): number {
    return (
      ((2 ** 31 - 1) & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31
    );
  }

  public choose<T>(list: Array<T>): T {
    return list[this.randomInInterval(0, list.length)];
  }

  public randomInInterval(aClosed: number, bOpen: number): number {
    return Math.floor((bOpen - aClosed) * this.next) + aClosed;
  }
}
