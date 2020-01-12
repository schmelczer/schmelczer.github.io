export class Animation<T> {
  private _value: T;
  private elapsedTime = 0;

  public constructor(
    private from: T,
    private to: T,
    private intervalInMs: number,
    private interpolator: (from: T, to: T, q: number) => T,
    private onChange?: (currentValue: T) => void
  ) {
    this._value = from;
  }

  public step(deltaTimeInMs: number) {
    if (this.elapsedTime === this.intervalInMs) {
      return;
    }

    this.elapsedTime = Math.min(
      this.elapsedTime + deltaTimeInMs,
      this.intervalInMs
    );

    const q = this.elapsedTime / this.intervalInMs;
    this._value = this.interpolator(this.from, this.to, q);
    this.onChange?.call(null, this._value);
  }

  public get value(): T {
    return this._value;
  }
}
