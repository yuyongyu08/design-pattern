import PursueMethods from './PursueMethods'
import Girl from './Girl'

export default class Pursute implements PursueMethods{
    mm: Girl

    constructor(mm: Girl){
        this.mm = mm
    }

    sendFlowers(){
        console.log(`${this.mm.name}, 送你花！`);
    }

    sendChocolate(){
        console.log(`${this.mm.name}, 送你巧克力！`);
    }
}