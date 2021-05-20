import {html, css} from 'lit';
import {customElement, property, } from 'lit/decorators.js';
import { BaseNeonElement } from "../base";

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
    button[typo='plain'] {
      display: inline-block;
      line-height: 1;
      font-size: 14px;
      white-space: nowrap;
      text-align: center;
      -webkit-appearance: none;
      cursor: pointer;
      background-color: var(--neon-background-color);
      color: var(--neon-text-color);
      border: 1px solid #dcdfe6;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      transition: .1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 12px 20px;
      border-radius: 4px;
    }
  `]

  /**
   * 按钮是否禁用
   */
  @property({ type: Boolean, reflect: true }) disabled = false;


  /**
   * 按钮类型, 为了不和原生属性type冲突, 命名为typo
   */
  @property({ type: String, reflect: true }) typo = 'plain';


  render() {
    return html`
      <button ?disabled="${this.disabled}" typo="${this.typo}" @click=${this._click} part="button">
        <slot></slot>
      </button>
    `
  }

  private _click() {
  }
}
