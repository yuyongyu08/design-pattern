import PursueMethods from './PursueMethods'
import Pursuit from './Pursuit'
import Girl from './Girl'

export default class Proxy implements PursueMethods{
    gg: Pursuit
    mm: Girl

    constructor(gg: Pursuit, mm: Girl){
        this.gg = gg
        this.mm = mm
    }

    sendFlowers(){
        console.log(`${this.mm.name}, ${this.gg.name}${this.gg.sendFlowers()}`)
    }

    sendChocolate(){
        console.log(`${this.mm.name}, ${this.gg.name}${this.gg.sendChocolate()}`)
    }

}