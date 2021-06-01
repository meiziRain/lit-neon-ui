import { html, css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js'
import { MODE, ModeEnum, emitter } from '../../global';
import { BaseNeonElement, BaseCSS } from "../base"
import _css from './.scss'
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
        css`${unsafeCSS(_css)}`
    ]

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
