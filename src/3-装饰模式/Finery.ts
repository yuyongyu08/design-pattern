import Person from './Person'

export default class Finery extends Person{
    component: Person = new Person('')

    decorate(component: Person) {
        this.component = component
    }

    show(){
        this.component.show()
    }
}