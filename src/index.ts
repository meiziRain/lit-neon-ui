import { NeonButton } from './components/button'
import { NeonCard } from './components/card'
import { NeonDialog } from './components/dialog'
import { NeonInput } from './components/input'
import { MyElement } from './components/demo/my-element'
import { NeonToast } from './components/toast'
import { NeonUI } from './global'

NeonUI.toast({
    content: new Date().toString(),
    duration: 2
})

declare global {
    interface HTMLElementTagNameMap {
        'neon-button': NeonButton
        'neon-card': NeonCard
        'neon-dialog': NeonDialog
        'neon-input': NeonInput
        'neon-toast': NeonToast
    }
}

export {
    MyElement,
    NeonButton,
    NeonCard,
    NeonDialog,
    NeonInput,
    NeonToast,
    NeonUI
}