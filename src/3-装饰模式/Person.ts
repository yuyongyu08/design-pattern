export default class Person {
    name?: string

    constructor(name?: string) {
        this.name = name
    }

    show() {
        console.log(`经过装扮的${this.name}`);
    }
}