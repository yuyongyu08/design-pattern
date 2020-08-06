import Developer from '../executor/Developer'

export default class Develop {
    type: string
    task: string
    developer: Developer
    constructor(developer: Developer,  task: string) {
        this.developer = developer
        this.task = task
    }

    action() { }
}