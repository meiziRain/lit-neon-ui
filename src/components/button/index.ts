import { html, css } from 'lit'
import { customElement, property, } from 'lit/decorators.js'
import { BaseNeonElement } from "../base"

/**
 * neon style button.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('neon-button')
export class NeonButton extends BaseNeonElement {
  static styles = [
    css`
      button {
        display: inline-block;
        line-height: 1;
        font-size: 16px;
        white-space: nowrap;
        text-align: center;
        -webkit-appearance: none;
        cursor: pointer;
        border: 1px solid #dcdfe6;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-family: Monoton;
        letter-spacing: 3px;
      }
      button[typo='plain'] {
        background-color: var(--neon-background-color);
        color: var(--neon-text-color);
      }

      button[typo='primary'] {
        background-color: var(--neon-text-color);
        color: var(--neon-el-text-color);
      }
    `
  ]
  /**
   * 按钮是否禁用
   */
  @property({ type: Boolean, reflect: true }) disabled = false


  /**
   * 按钮是否禁用
   */
  @property({ type: Boolean, reflect: true }) round = false


  /**
   * 按钮类型, 为了不和原生属性type冲突, 命名为typo
   */
  @property({ type: String, reflect: true }) typo = 'plain'


  render() {
    return html`
      <button class="${this.disabled ? 'disabled' : ''} ${this.round ? 'round' : ''}" typo="${this.typo}"
        @click=${this._click} part="button">
        <slot></slot>
      </button>
    `
  }

  private _click() {
  }
}
