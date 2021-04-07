export default class Person {
    name?: string

    constructor(name?: string) {
        this.name = name
    }

    show() {
        console.log(`${this.name}`);
    }
}