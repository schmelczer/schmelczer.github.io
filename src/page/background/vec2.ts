export class Vec2 {
  public static readonly Zero = new Vec2(0, 0);

  public constructor(public readonly x: number, public readonly y: number) {}

  public add(other: Vec2): Vec2 {
    return new Vec2(this.x + other.x, this.y + other.y);
  }

  public subtract(other: Vec2): Vec2 {
    return new Vec2(this.x - other.x, this.y - other.y);
  }

  public multiply(other: Vec2): Vec2 {
    return new Vec2(this.x * other.x, this.y * other.y);
  }
}
