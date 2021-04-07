export default class ChinaCenter {
    name: string

    constructor(name: string) {
        this.name = name
    }

    进攻(): void {
        console.log(`华裔中锋 ${this.name} 进攻`)
    }

    防守(): void {
        console.log(`华裔中锋 ${this.name} 防守`)
    }
}