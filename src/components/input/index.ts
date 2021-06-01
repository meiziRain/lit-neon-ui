import { html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseCSS, BaseNeonElement, fontAwesomeCss } from '../base';
import _css from './.scss'
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('neon-input')
export class NeonInput extends BaseNeonElement {
  static styles = [
    BaseCSS,
    css`${unsafeCSS(fontAwesomeCss)}`,
    css`${unsafeCSS(_css)}`
  ]

  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) placeholder = '';
  @property({ type: String }) name: string = '';
  @property({ type: String }) type = 'text';
  @property({ type: String }) autocomplete: string = 'on';
  @property({ type: String }) autocorrect = '';
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean }) autofocus = false;
  @property({ type: Boolean }) readonly = false;
  @property({ type: Number }) minlength: number = 0;
  @property({ type: Number }) maxlength: number = 20;
  @property({ type: String }) suffix = '';


  render() {
    return html`
    <div class="neon-input neon-input-suffix">
      <input ?round="${this.round}" ?border="${this.border}" name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
        ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}"
        minlength="${this.minlength}" maxlength="${this.maxlength}" ?readonly="${this.readonly}"
        autocorrect="${this.autocorrect}" @change="${this.refire}" @input="${this.refire}"
        >
        <i id="input-suffix" class="${this.suffix}"></i>
    </div>
    `
  }

  private refire(event: Event) {
    event.stopPropagation();
    this.fire(event.type, { sourceEvent: event });
  }
}
