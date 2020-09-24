import { addImul } from './polyfills';

export class Random {
  public constructor(private seed: number) {
    addImul();
  }

  public get next(): number {
    // result is in [0, 1)
    return ((2 ** 31 - 1) & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31;
  }

  public choose<T>(list: Array<T>): T {
    return list[Math.floor(this.randomInInterval(0, list.length))];
  }

  public randomInInterval(aClosed: number, bOpen: number): number {
    return (bOpen - aClosed) * this.next + aClosed;
  }
}
