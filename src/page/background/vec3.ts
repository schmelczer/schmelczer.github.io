import { Vec2 } from './vec2';

export class Vec3 {
  public static readonly Zero = new Vec3(0, 0, 0);

  public static from(vec2: Vec2, z: number): Vec3 {
    return new Vec3(vec2.x, vec2.y, z);
  }

  public constructor(
    public readonly x: number,
    public readonly y: number,
    public readonly z: number
  ) {}

  public add(other: Vec3): Vec3 {
    return new Vec3(this.x + other.x, this.y + other.y, this.z + other.z);
  }

  public multiply(other: Vec3): Vec3 {
    return new Vec3(this.x * other.x, this.y * other.y, this.z * other.z);
  }
}
