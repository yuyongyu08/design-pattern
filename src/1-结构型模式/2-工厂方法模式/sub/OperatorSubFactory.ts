import OperatorFactory from '../OperatorFactory'
import OperatorSub from './OperatorSub'

export default class OperatorSubFactory implements OperatorFactory{
    createOperator(param1: number, param2: number){
        return new OperatorSub(param1, param2)
    }
}