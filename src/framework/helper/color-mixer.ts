export const mixColors = (
  hexColorA: string,
  hexColorB: string,
  quantityA: number
): string => {
  const colorA = hexToRGB(normalizeHex(hexColorA));
  const colorB = hexToRGB(normalizeHex(hexColorB));

  const mixedColor: [number, number, number] = [
    mix(colorA[0], colorB[0], quantityA),
    mix(colorA[1], colorB[1], quantityA),
    mix(colorA[2], colorB[2], quantityA),
  ];

  return RGBToHex(mixedColor);
};

const hexToRGB = ([r1, r2, g1, g2, b1, b2]: string): [
  number,
  number,
  number
] => {
  return [
    Number.parseInt(r1 + r2, 16),
    Number.parseInt(g1 + g2, 16),
    Number.parseInt(b1 + b2, 16),
  ];
};

const normalizeHex = (hex: string): string => {
  hex = hex.trim();
  if (hex.startsWith('#')) {
    hex = hex.substr(1);
  }
  return hex;
};

const mix = (a: number, b: number, q: number): number => a * q + b * (1 - q);

const RGBToHex = (rgb: [number, number, number]): string =>
  '#' + rgb.map(n => Math.round(n).toString(16)).join('');
