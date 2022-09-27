import { html } from '../../types/html';
import './main.scss';

export const generate = (perspective: number): html => `
  <main style="perspective: ${perspective}px"></main>
`;
