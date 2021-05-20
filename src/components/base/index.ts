import { css, LitElement } from 'lit'
import styles from './base.scss';

// export const BaseCSS = css`

// `;

/**
 * Base element.
 *
 */
export abstract class BaseNeonElement extends LitElement {
  static styles = [styles,
    css`
      :host {
        padding: 22px;
      }
    `
  ];
}
