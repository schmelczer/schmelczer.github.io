import {
  choose,
  mixColors,
  randomFactory,
  randomInInterval
} from "../../framework/helper";
import { Vec2 } from "./vec2";
import { Vec3 } from "./vec3";

export class Blob {
  private static readonly creatorRandom = randomFactory(44);
  private static readonly colors = ["#fff9e0", "#ffd6d6"];
  private static readonly rotation = (-20 / 180) * Math.PI;

  private static zMin: number;
  private static zMax: number;
  public static initialize(zMin: number, zMax: number) {
    Blob.zMin = zMin;
    Blob.zMax = zMax;
  }

  public readonly z = randomInInterval(
    Blob.zMin,
    Blob.zMax,
    Blob.creatorRandom
  );

  private readonly positionQ = new Vec2(
    Blob.creatorRandom(),
    Blob.creatorRandom()
  );
  private _positionScale = new Vec2(0, 0);

  private readonly _size = new Vec2(
    140,
    randomInInterval(160, 740, Blob.creatorRandom)
  );
  private readonly color =
    "#" +
    mixColors(
      "#ffffff",
      choose(Blob.colors, Blob.creatorRandom),
      (this.z - Blob.zMin) / (Blob.zMax - Blob.zMin)
    );

  public get topLeft(): Vec3 {
    return Vec3.from(this.positionQ.multiply(this._positionScale), this.z);
  }

  public get size(): Vec2 {
    return this._size;
  }

  public set positionScale(value: Vec2) {
    this._positionScale = value;
  }

  public draw(ctx: CanvasRenderingContext2D, position: Vec2, size: Vec2) {
    ctx.save();

    ctx.translate(position.x, position.y);
    ctx.rotate(Blob.rotation);

    ctx.beginPath();
    ctx.arc(0, size.x / 2 - size.y / 2, size.x / 2, Math.PI, 0);
    ctx.arc(0, size.y / 2 - size.x / 2, size.x / 2, 0, Math.PI);
    ctx.closePath();

    ctx.fillStyle = this.color;
    ctx.fill();

    ctx.restore();
  }
}
