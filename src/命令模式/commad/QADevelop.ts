import Develop from './Develop'
import QA from '../executor/QA'


export default class FEDevelop extends Develop {
    type: string = 'QA'

    constructor(qa: QA, task: string) {
        super(qa, task)
    }

    action() {
        this.developer.test(this.task)
    }
}