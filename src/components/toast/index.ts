import { html, css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseCSS, BaseNeonElement, fontAwesomeCss } from '../base';
import _css from './.scss'
/**
 * An example element.
 *
 * @slot - This element has a slot
 */
@customElement('neon-toast')
export class NeonToast extends BaseNeonElement {
  static styles = [
    BaseCSS,
    css`${unsafeCSS(fontAwesomeCss)}`,
    css`${unsafeCSS(_css)}`,
  ]

  render() {
    return html`
        <div role="alert" class="neon-toast" style="z-index: 2013;">
          <i class="neon-toast-icon"></i>
          <slot></slot>
        </div>
      `
  }
}


