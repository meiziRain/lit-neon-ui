import { css, LitElement } from 'lit'
import style from './base.scss'

export const BaseCSS = css`

  * {
    border: none;
  }

  [disabled] {
    opacity: 0.8;
    filter: grayscale(0.7);
    cursor: not-allowed;
  }

  [round] {
    border-radius: var(--neon-border-radius);
  }

  [border] {
    border: 2px solid #dcdfe6;
  }
`;

/**
 * Base element.
 *
 */
export abstract class BaseNeonElement extends LitElement {  
  static styles = [
    style
  ]
}
