import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { MODE, ModeEnum, emitter } from '../../global';
import { BaseNeonElement, BaseCSS } from "../base"

/**
 * A neon style card.
 *
 * @slot - This element has a slot
 */
@customElement('neon-card')
export class NeonCard extends BaseNeonElement {
    static _css: any
    static styles = [
        BaseCSS,
        css`
            :host {
                display: block;
            }
            #card {
                color: var(--neon-text-color);
                padding: 20px;
                height: 100%;
                transition: all .5s linear;
            }
            .card-dark {
                border: 8px double #61C6B4;
            }
            .card-dark:hover {
                box-shadow: 0 0 20px rgba(97, 198, 180, 0.5), inset 0 0 20px rgba(97, 198, 180, 0.5);
            }
            .card-light {
                border: none;
                box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
            }
        `
    ]

    // @query('#card') private _card?: HTMLDivElemen
    /**
     * 是否圆角
     */
    @property({ type: Boolean, reflect: true }) round = false

    render() {
        return html`
            <div id="card" part="card" ?round="${this.round}" class="card-dark">
                <slot></slot>
            </div>
        `
    }

    updated() {
        const el = this.renderRoot.querySelector('#card')
        emitter.on('onInit', () => {
            if (MODE === ModeEnum.dark) {
                el?.classList.add('card-dark')
                el?.classList.remove('card-light')
            }
            else {
                el?.classList.add('card-light')
                el?.classList.remove('card-dark')
            }
        })
        // if (MODE === ModeEnum.dark) {
        //     el?.classList.add('card-dark')
        //     el?.classList.remove('card-light')
        // }
        // else {
        //     el?.classList.add('card-light')
        //     el?.classList.remove('card-dark')
        // }
    }
}
