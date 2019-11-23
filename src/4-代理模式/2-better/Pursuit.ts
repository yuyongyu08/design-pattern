import PursueMethods from './PursueMethods'
import Girl from './Girl'

export default class Pursute implements PursueMethods{
    name: string

    constructor(name: string){
        this.name = name
    }

    sendFlowers(){
        return `送你花！`
    }

    sendChocolate(){
        return `送你巧克力！`
    }
}