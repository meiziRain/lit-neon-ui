import { NeonButton } from './components/button'
import { MyElement } from './components/demo/my-element'


declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement
        'neon-element': NeonButton
    }
}

export {
    MyElement,
    NeonButton
}