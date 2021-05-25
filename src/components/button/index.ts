import { css, html } from 'lit'
import { customElement, property, } from 'lit/decorators.js'
import { BaseNeonElement, BaseCSS } from "../base"

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
    css`
      button {
        display: inline-block;
        line-height: 1;
        font-size: 16px;
        white-space: nowrap;
        text-align: center;
        -webkit-appearance: none;
        cursor: pointer;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: 0.5s;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        padding: 12px 20px;
        font-family: Monoton;
        letter-spacing: 3px;
      }
      
      button[typo="plain"] {
          background-color: var(--neon-background-color);
          color: var(--neon-text-color);
      }
      
      button[typo="primary"] {
          background-color: var(--neon-text-color);
          color: var(--neon-el-text-color);
          border: 1px solid var(--neon-text-color);
      }


      button[typo="plain"] {
        background-color: var(--neon-background-color);
        color: var(--neon-text-color);
      }
    
      button[size="mini"] {
        padding: 7px 15px;
      }

      button[size="medium"] {
        padding: 10px 20px;
      }

      button[size="large"] {
        padding: 15px 25px;
      }
    `
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
   * 按钮是否圆角
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
