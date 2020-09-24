import { Vec2 } from './vec2';
import { Vec3 } from './vec3';
import { mixColors } from '../../framework/helper/mix-colors';
import { Random } from '../../framework/helper/random';
import { Animation } from './animation';
import { PageBackground } from './background';

export class Blob {
  private static readonly DARK_COLORS = ['#2c477a'];
  private static readonly LIGHT_COLORS = ['#fff9e0', '#ffd6d6'];
  private static readonly ROTATION = (-20 / 180) * Math.PI;
  private static readonly CREATOR_RANDOM = new Random(51);

  private static colorPickerRandom = new Random(132);
  private static isDarkThemed = false;

  public static changeTheme(isDarkThemed: boolean) {
    Blob.colorPickerRandom = new Random(132);
    Blob.isDarkThemed = isDarkThemed;
  }

  public readonly z = Blob.CREATOR_RANDOM.randomInInterval(
    PageBackground.Z_MIN,
    PageBackground.Z_MAX
  );
  private color: Animation<string>;

  private readonly positionQ = new Vec2(
    Blob.CREATOR_RANDOM.next,
    Blob.CREATOR_RANDOM.next
  );
  private _positionScale = new Vec2(0, 0);
  private _positionOffset = new Vec2(0, 0);

  private readonly _size = new Vec2(140, Blob.CREATOR_RANDOM.randomInInterval(260, 740));

  public constructor() {
    this.decideColor();
  }

  public decideColor() {
    const target = mixColors(
      Blob.isDarkThemed ? '#242638' : '#ffffff',
      Blob.colorPickerRandom.choose(
        Blob.isDarkThemed ? Blob.DARK_COLORS : Blob.LIGHT_COLORS
      ),
      (this.z - PageBackground.Z_MIN) / (PageBackground.Z_MAX - PageBackground.Z_MIN)
    );

    this.color = new Animation<string>(
      this.color ? this.color.value : target,
      target,
      250,
      (f, t, q) => mixColors(f, t, 1 - q)
    );
  }

  public step(value) {
    this.color?.step(value);
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
    ctx.rotate(Blob.ROTATION);

    ctx.beginPath();
    ctx.arc(0, size.x / 2, size.x / 2, Math.PI, 0);
    ctx.arc(0, size.y - size.x / 2, size.x / 2, 0, Math.PI);
    ctx.closePath();

    ctx.fillStyle = this.color.value;
    ctx.fill();

    ctx.restore();
  }
}
