import { html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseCSS, BaseNeonElement, fontAwesomeCss } from '../base';
import _css from './.scss'
/**
 * An example element.
 *
 * @slot - This element has a slot
 */
@customElement('neon-dialog')
export class NeonDialog extends BaseNeonElement {
    static styles = [
        BaseCSS,
        css`${unsafeCSS(fontAwesomeCss)}`,
        css`${unsafeCSS(_css)}`,
    ]

    @property({ type: Boolean, reflect: true }) open = false;

    /**
     * 标题
     */
    @property({ type: String, reflect: true }) title = '标题'

    /**
     * 标题是否居中
     */
    @property({ type: Boolean, reflect: true }) center = false


    /**
     * 对话框宽度
     */
    @property({ type: String }) width = '700px'
    render() {
        return html`
            <div id="dialog-container" ?center="${this.center}">
                <div id="dialog-wrapper" style="width: ${this.width}">
                    <neon-card round>
                        <div id="header">
                            <div id="title">
                                ${this.title}
                            </div>
                            <div id="closer" @click=${this._close}>
                                <i class="fas fa-times"></i>
                            </div>
                        </div>
                        <slot></slot>
                        <div id="footer">
                            <slot name="footer"></slot>
                        </div>
                    </neon-card>
                </div>
            </div>
        `
    }
    private _close(event: Event) {
        this.fire('before-close', { sourceEvent: event })
    }
}
