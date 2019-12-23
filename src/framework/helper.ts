export const mixColorsToRGB = (
  hexColorA: string,
  hexColorB: string,
  qA: number
): string => {
  const colorA = hexToRGB(hexColorA);
  const colorB = hexToRGB(hexColorB);
  const mixedColor: [number, number, number] = [
    colorA[0] * qA + colorB[0] * (1 - qA),
    colorA[1] * qA + colorB[1] * (1 - qA),
    colorA[2] * qA + colorB[2] * (1 - qA)
  ];

  return RGBToHex(mixedColor);
};

const hexToRGB = (hex: string): [number, number, number] => {
  const [r1, r2, g1, g2, b1, b2] = hex;
  return [
    Number.parseInt(r1 + r2, 16),
    Number.parseInt(g1 + g2, 16),
    Number.parseInt(b1 + b2, 16)
  ];
};

const RGBToHex = (rgb: [number, number, number]): string =>
  rgb.map(n => Math.round(n).toString(16)).join("");
