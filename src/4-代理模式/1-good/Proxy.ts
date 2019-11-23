import PursueMethods from './PursueMethods'
import Pursuit from './Pursuit'
import Girl from './Girl'

export default class Proxy implements PursueMethods{
    gg: Pursuit

    constructor(mm: Girl){
        this.gg = new Pursuit(mm)
    }

    sendFlowers(){
        this.gg.sendFlowers()
    }

    sendChocolate(){
        this.gg.sendChocolate()
    }

}