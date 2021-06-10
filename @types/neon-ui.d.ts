import mitt from 'mitt'

export declare namespace NeonUI {
    export const emitter = mitt()
    /**
     * mode.
     */
    export declare type modeType = 'dark' | 'light'

    export let MODE: ModeEnum

    export function init(chooese_mode: modeType = 'dark'): any {
        chooese_mode === 'dark' ? MODE = ModeEnum.dark : MODE = ModeEnum.light
        emitter.emit('onInit', {})
    }

    export function toast(toastOption: ToastOption) {
        const temp_element = document.createElement('neon-toast')
        temp_element.innerHTML = `${toastOption.content}`
        document.body.insertAdjacentElement("beforeend", temp_element)
    }

    export interface ToastOption {
        // 消息文字
        content: string
        // 主题	success/warning/info/error	info	
        type: string
        // 自定义图标的类名，会覆盖 type
        iconClass: string
        // 显示时间, 毫秒。设为 0 则不会自动关闭
        duration: number
        // 是否显示关闭按钮
        showClose: boolean
        // 文字是否居中
        center: boolean
        onClose: Function
    }

    export enum ModeEnum {
        light,
        dark
    }
}
