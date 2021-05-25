import mitt from 'mitt'
export const emitter = mitt()
/**
 * mode.
 */
export declare type modeType = 'dark' | 'light'

export enum ModeEnum {
    light,
    dark
}

export let MODE: ModeEnum

export class NeonUI {
    init(chooese_mode: modeType = 'dark'): any {
        chooese_mode === 'dark' ? MODE = ModeEnum.dark : MODE = ModeEnum.light
        emitter.emit('onInit', {})
    }
}
 