import Operator from './Operator'
export default class OperatorMul extends Operator {
    public getResult(){
        let result: number = 0;
        result = param1 * param2
        return result
    }
}