import Operator from '../Operator'
export default class OperatorMul extends Operator {
    public getResult() {
        let result: number = 0;
        result = this.param1 * this.param2
        return result
    }
}