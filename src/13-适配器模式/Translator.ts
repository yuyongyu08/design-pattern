import Player from './Player'
import ChinaCenter from './ChinaCenter'

export default class Translator extends Player {
    private chinaCenter: ChinaCenter

    constructor(name: string) {
        super(name)

        this.chinaCenter = new ChinaCenter(name)
    }

    attack(): void {
        this.chinaCenter.进攻()
    }

    defense(): void {
        this.chinaCenter.防守()
    }
}