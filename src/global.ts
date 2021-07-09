import mitt from 'mitt'
import GSAP from "gsap"
export namespace NeonUI {
    export const emitter = mitt()

    export let MODE: ModeEnum

    export function init(chooesed_mode: ModeEnum = ModeEnum.dark): any {
        MODE = chooesed_mode
        emitter.emit('onInit', {})
    }

    export function toast(toastOption: ToastOption) {
        const temp_element = document.createElement('neon-toast')
        temp_element.innerHTML = `${toastOption.content}`
        document.body.insertAdjacentElement("beforeend", temp_element)
        GSAP.fromTo(temp_element, {
            y: '-100%',
            opacity: 0
        }, {
            y: '20px',
            opacity: 1,
            ease: 'Expo.easeOut',
            force3D: true,
            duration: 1,
            onComplete: () => {
                GSAP.delayedCall(toastOption.duration, () => {
                    GSAP.fromTo(temp_element, {
                        y: '20px',
                        opacity: 1
                    }, {
                        y: '-100%',
                        opacity: 0,
                        ease: 'Expo.easeOut',
                        force3D: true,
                        duration: 1,
                        onComplete: () => {
                            document.body.removeChild(temp_element)
                        }
                    })
                })
            }
        })
    }

    export interface ToastOption {
        // 消息文字
        content: string
        // 主题	success/warning/info/error	info	
        type?: string
        // 自定义图标的类名，会覆盖 type
        iconClass?: string
        // 显示时间, 毫秒。设为 0 则不会自动关闭
        duration: number
        // 是否显示关闭按钮
        showClose?: boolean
        // 文字是否居中
        center?: boolean
        onClose?: Function
    }

    export enum ModeEnum {
        light,
        dark
    }
}
