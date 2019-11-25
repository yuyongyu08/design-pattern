import OperatorFactory from '../OperatorFactory'
import OperatorMul from './OperatorMul'

export default class OperatorMulFactory implements OperatorFactory{
    createOperator(param1: number, param2: number){
        return new OperatorMul(param1, param2)
    }
}