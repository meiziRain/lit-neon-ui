import { html, css, unsafeCSS } from 'lit'
import { customElement, property, } from 'lit/decorators.js'
import { BaseNeonElement, BaseCSS } from "../base"
import _css from './.scss'
/**
 * neon style button.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('neon-button')
export class NeonButton extends BaseNeonElement {
  static styles = [
    BaseCSS,
    css`${unsafeCSS(_css)}`,
  ]

  /**
   * 按钮尺寸
   */
  @property({ type: String, reflect: true }) size = 'medium'

  /**
   * 按钮是否禁用
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * 是否圆角
   */
  @property({ type: Boolean, reflect: true }) round = false

  /**
   * 按钮是否有边框
   */
  @property({ type: Boolean, reflect: true }) border = false

  /**
   * 按钮类型, 为了不和原生属性type冲突, 命名为typo
   */
  @property({ type: String, reflect: true }) typo = 'plain'


  render() {
    return html`
      <button ?disabled="${this.disabled}" ?round="${this.round}" ?border="${this.border}" typo="${this.typo}"
        size="${this.size}" @click=${this._click} part="button">
        <slot></slot>
      </button>
    `
  }

  updated() {
    
  }

  private _click() {
  }
}
