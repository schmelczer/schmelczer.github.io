export type hex = string;
export type rgb = [number, number, number];

export const mixColors = (hexColorA: hex, hexColorB: hex, quantityA: number): hex => {
  const colorA = hexToRGB(hexColorA);
  const colorB = hexToRGB(hexColorB);

  const mixedColor: rgb = [
    mix(colorA[0], colorB[0], quantityA),
    mix(colorA[1], colorB[1], quantityA),
    mix(colorA[2], colorB[2], quantityA),
  ];

  return rgbToHex(mixedColor);
};

const hexToRGB = (hex: hex): rgb => {
  const [r1, r2, g1, g2, b1, b2] = normalizeHex(hex);
  return [parseInt(r1 + r2, 16), parseInt(g1 + g2, 16), parseInt(b1 + b2, 16)];
};

const normalizeHex = (hex: hex): hex => {
  hex = hex.trim();
  if (hex[0] === '#') {
    hex = hex.substr(1);
  }
  return hex;
};

const mix = (a: number, b: number, q: number): number => a * q + b * (1 - q);

const rgbToHex = (rgb: rgb): hex =>
  '#' + rgb.map(n => (n < 16 ? '0' : '') + Math.round(n).toString(16)).join('');
