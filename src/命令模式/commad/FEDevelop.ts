import Develop from './Develop'
import FE from '../executor/FE'


export default class FEDevelop extends Develop {
    type: string = 'FE'

    constructor(fe: FE, task: string) {
        super(fe, task)
    }

    action() {
        this.developer.program(this.task)
    }
}