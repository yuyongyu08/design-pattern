import Player from './Player'

export default class Guard extends Player {
    constructor(name: string) {
        super(name)
    }

    attack(): void {
        console.log(`后卫 ${this.name} 进攻`);
    }

    defense(): void {
        console.log(`后卫 ${this.name} 防守`)
    }
}