import {
  choose,
  mixColors,
  randomFactory,
  randomInInterval
} from "../../framework/helper";

export class Blob {
  private static readonly creatorRandom = randomFactory(44);
  private static readonly colors = ["#fff9e0", "#ffd6d6"];

  private readonly x = Blob.creatorRandom();
  private readonly y = Blob.creatorRandom();
  private readonly z = Blob.creatorRandom();
  private readonly rotation = 20;
  private readonly width = 140;
  private readonly height = randomInInterval(160, 740, Blob.creatorRandom);
  private readonly color: string;

  constructor() {
    this.color =
      "#" +
      mixColors("#ffffff", choose(Blob.colors, Blob.creatorRandom), this.z);
  }

  public get topLeft(): [number, number, number] {
    return [this.x, this.y, this.z];
  }

  public get bottomRight(): [number, number, number] {
    return [this.x + this.width, this.y + this.height, this.z];
  }

  public draw(
    ctx: CanvasRenderingContext2D,
    position: [number, number],
    size: [number, number]
  ) {
    const [x, y] = position;
    const [width, height] = size;
    const radius = Math.min(width, height) / 2;

    ctx.save();
    ctx.translate(-x, -y);
    ctx.rotate(this.rotation);
    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }
}
