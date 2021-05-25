import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseNeonElement } from '../base';

/**
 * An example element.
 *
 * @slot - This element has a slot
 */
@customElement('neon-dialog')
export default class NeonDialog extends BaseNeonElement {
    static styles = [
        css`
        `
    ]

    @property({ type: Number }) elevation = 5;

    @property({ type: Boolean, reflect: true }) open = false;


    render() {
        return html`
            <div>
                
            </div>
        `
    }

    foo(): string {
        return 'foo'
    }
}
