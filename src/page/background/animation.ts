import { Vec2 } from './vec2';

export class Animation {
  private _value: Vec2;
  private elapsedTime = 0;

  public constructor(
    private from: Vec2,
    private to: Vec2,
    private intervalInMs: number,
    private onChange?: (currentValue: Vec2) => void
  ) {}

  public step(deltaTimeInMs: number) {
    if (this.elapsedTime === this.intervalInMs) {
      return;
    }

    this.elapsedTime = Math.min(
      this.elapsedTime + deltaTimeInMs,
      this.intervalInMs
    );
    const q = this.elapsedTime / this.intervalInMs;

    this._value = new Vec2(
      Animation.interpolate(this.from.x, this.to.x, q),
      Animation.interpolate(this.from.y, this.to.y, q)
    );

    this.onChange?.call(null, this._value);
  }

  private static interpolate(from: number, to: number, q: number): number {
    return from + q * (to - from);
  }

  public get value(): Vec2 {
    return this._value;
  }
}
