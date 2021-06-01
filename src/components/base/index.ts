import { css, LitElement } from 'lit'
import style from './base.scss'
import fontAwesomeCss from '../../assets/icon-font/fontawesome-free-5.15.3-web/css/all.css'
import { property } from 'lit/decorators.js'
export { fontAwesomeCss }
export const BaseCSS = css`
  * {
    border: none;
  }

  [disabled] {
    opacity: 0.8 !important;
    filter: grayscale(0.7) !important;
    cursor: not-allowed !important;
  }

  [round] {
    border-radius: var(--neon-border-radius) !important;
  }

  [border] {
    border: 2px solid #dcdfe6 !important;
  }

  .visible {
    visibility: visible;
  }
`;

/**
 * Base element.
 *
 */
export abstract class BaseNeonElement extends LitElement {
  static styles = [
    style,
  ]

  fire(name: string, detail?: any) {
    fireEvent(this, name, detail);
  }


  /**
 * 是否圆角
 */
  @property({ type: Boolean, reflect: true }) round = false

  /**
   * 按钮是否有边框
   */
  @property({ type: Boolean, reflect: true }) border = false
}


export function fireEvent(e: HTMLElement, name: string, detail?: any) {
  e.dispatchEvent(new CustomEvent(name, {
    composed: true,
    bubbles: true,
    detail
  }));
}
