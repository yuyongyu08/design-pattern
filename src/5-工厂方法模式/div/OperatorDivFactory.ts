import OperatorFactory from '../OperatorFactory'
import OperatorDiv from './OperatorDiv'

export default class OperatorDivFactory implements OperatorFactory{
    createOperator(param1: number, param2: number){
        return new OperatorDiv(param1, param2)
    }
}