import { html } from '../../model/misc';

import './primitives.scss';

export interface Primitive {
  toHTML(): html;
}
