export const mix = (from: number, to: number, q: number): number =>
  from * (1 - q) + to * q;
