import { NeonButton } from './components/button'
import { NeonCard } from './components/card'
import { NeonDialog } from './components/dialog'
import { NeonInput } from './components/input'
import { MyElement } from './components/demo/my-element'
import { NeonUI } from './global'

declare global {
    interface HTMLElementTagNameMap {
        'neon-button': NeonButton
        'neon-card': NeonCard
        'neon-dialog': NeonDialog
        'neon-input': NeonInput
    }
}

export {
    MyElement,
    NeonButton,
    NeonCard,
    NeonDialog,
    NeonInput,
    NeonUI
}