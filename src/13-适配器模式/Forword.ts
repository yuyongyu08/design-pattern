import Player from './Player'

export default class Forward extends Player {
    constructor(name: string) {
        super(name)
    }

    attack(): void {
        console.log(`前锋 ${this.name} 进攻`);
    }

    defense(): void {
        console.log(`前锋 ${this.name} 防守`)
    }
}