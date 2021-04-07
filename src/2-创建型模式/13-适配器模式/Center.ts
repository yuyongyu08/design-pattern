import Player from './Player'

export default class Center extends Player {
    constructor(name: string) {
        super(name)
    }

    attack(): void {
        console.log(`中锋 ${this.name} 进攻`);
    }

    defense(): void {
        console.log(`中锋 ${this.name} 防守`)
    }
}