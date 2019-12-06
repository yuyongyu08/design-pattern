import PersonBuilder from './PersonBuilder'

export default class BuilderDirector{
    // personBuilder: PersonBuilder

    constructor(private personBuilder: PersonBuilder){
        // this.personBuilder = personBuilder
    }

    createPerson(){
        this.personBuilder.drawHeader()
        this.personBuilder.drawBody()
        this.personBuilder.drawHands()
        this.personBuilder.drawFooters()
    }
}