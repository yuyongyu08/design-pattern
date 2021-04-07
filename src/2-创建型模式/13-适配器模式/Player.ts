export default abstract class Player {
    name: string

    constructor(name: string) {
        this.name = name
    }

    abstract attack(): void

    abstract defense(): void
}