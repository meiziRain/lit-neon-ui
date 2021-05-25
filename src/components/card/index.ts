import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { MODE, ModeEnum, emitter } from '../../global';
import { BaseNeonElement, BaseCSS } from "../base"

const darkStyle = css`
#card {
    background-color: red;
}
`

const lightStyle = css`
#card {
    background-color: green;
}
`

/**
 * A neon style card.
 *
 * @slot - This element has a slot
 */
@customElement('neon-card')
export class NeonCard extends BaseNeonElement {
    static _css:any
    static styles = [
        BaseCSS,
        NeonCard._css= MODE === ModeEnum.dark ? [darkStyle] : [lightStyle],
        css`
            :host {
                display: block;
            }
            #card {
                height: 100%;
                border: 0.4rem solid var(--neon-text-color);
            }
            .flicker{
                animation: border-flicker 1.5s infinite alternate;
            }
            @keyframes border-flicker {
                0%,
                19%,
                21%,
                23%,
                25%,
                54%,
                56%,
                100% {
                box-shadow: 0 0 0.5rem #fff, inset 0 0 0.5rem #fff, 0 0 2rem darkblue, inset 0 0 2rem darkblue, 0 0 4rem darkblue,
                    inset 0 0 4rem darkblue;
                }
            
                20%,
                24%,
                55% {
                text-shadow: none;
                box-shadow: none;
                }
            }
        `
    ]

    // @query('#card') private _card?: HTMLDivElement

    @property({ type: Boolean, reflect: true }) flicker = false;


    render() {
        return html`
            <div id="card">
                <slot></slot>
            </div>
        `
    }

    updated() {
        emitter.on('onInit', () => {
            if (MODE === ModeEnum.dark) {
                this.renderRoot.querySelector('#card')?.classList.add('flicker')
            }
            else {
                this.renderRoot.querySelector('#card')?.classList.remove('flicker')
            }
        })
        if (MODE === ModeEnum.dark) {
            this.renderRoot.querySelector('#card')?.classList.add('flicker')
        }
        else {
            this.renderRoot.querySelector('#card')?.classList.remove('flicker')
        }
    }
}
