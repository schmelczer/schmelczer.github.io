import { Vec2 } from './vec2';
import { Vec3 } from './vec3';

import { Random } from '../../helper/random';
import { Animation } from './animation';
import { PageBackground } from './background';
import { mix } from '../../helper/mix';

export class Blob {
  private static readonly darkColors = [new Vec3(44, 71, 122)];
  private static readonly lightColors = [
    new Vec3(255, 249, 224),
    new Vec3(255, 214, 214),
  ];
  private static readonly creatorRandom = new Random(51);

  private static colorPickerRandom = new Random(132);
  private static isDarkThemed = false;

  public static changeTheme(isDarkThemed: boolean) {
    Blob.colorPickerRandom = new Random(132);
    Blob.isDarkThemed = isDarkThemed;
  }

  public readonly z = Blob.creatorRandom.randomInInterval(
    PageBackground.zMin,
    PageBackground.zMax
  );
  private color: Animation<Vec3>;

  private readonly positionQ = new Vec2(Blob.creatorRandom.next, Blob.creatorRandom.next);
  private _positionScale = new Vec2(0, 0);
  private _positionOffset = new Vec2(0, 0);
  private opacity: number;

  private readonly _size = new Vec2(140, Blob.creatorRandom.randomInInterval(260, 740));

  public constructor() {
    this.opacity =
      1 - (this.z - PageBackground.zMin) / (PageBackground.zMax - PageBackground.zMin);

    this.decideColor();
  }

  public decideColor() {
    const target = Blob.colorPickerRandom.choose(
      Blob.isDarkThemed ? Blob.darkColors : Blob.lightColors
    );

    this.color = new Animation<Vec3>(
      this.color ? this.color.value : target,
      target,
      125,
      (f, t, q) => {
        return new Vec3(mix(f.x, t.x, q), mix(f.y, t.y, q), mix(f.z, t.z, q));
      }
    );
  }

  public step(deltaTime: number) {
    this.color?.step(deltaTime);
  }

  public get topLeft(): Vec3 {
    return Vec3.from(
      this.positionQ.multiply(this._positionScale).add(this._positionOffset),
      this.z
    );
  }

  public get size(): Vec2 {
    return this._size;
  }

  public set positionScale(value: Vec2) {
    this._positionScale = value;
  }

  public set positionOffset(value: Vec2) {
    this._positionOffset = value;
  }

  public draw(ctx: CanvasRenderingContext2D, position: Vec2, size: Vec2) {
    ctx.save();

    ctx.translate(position.x, position.y);
    ctx.rotate((-20 / 180) * Math.PI);

    ctx.beginPath();
    ctx.arc(0, size.x / 2, size.x / 2, Math.PI, 0);
    ctx.arc(0, size.y - size.x / 2, size.x / 2, 0, Math.PI);
    ctx.closePath();

    const { x, y, z } = this.color.value;
    ctx.fillStyle = `rgba(${x}, ${y}, ${z}, ${this.opacity})`;
    ctx.fill();

    ctx.restore();
  }
}
