import Develop from './Develop'
import RD from '../executor/RD'


export default class FEDevelop extends Develop {
    type: string = 'RD'

    constructor(rd: RD, task: string) {
        super(rd, task)
    }

    action() {
        this.developer.program(this.task)
    }
}