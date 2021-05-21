import { css, LitElement } from 'lit'
import style from './base.scss'
/**
 * Base element.
 *
 */
export abstract class BaseNeonElement extends LitElement {
  static styles = [
    style,
    css`
    `
  ]
}
