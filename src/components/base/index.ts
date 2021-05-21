import { css, CSSResultArray, LitElement } from 'lit'
import style from './base.scss'
/**
 * Base element.
 *
 */
export abstract class BaseNeonElement extends LitElement {
  static get styles(): CSSResultArray {
    return [
      css`
        :host {
          font-weight: 1000;

        }
      `,
      style
    ]
  }
}
