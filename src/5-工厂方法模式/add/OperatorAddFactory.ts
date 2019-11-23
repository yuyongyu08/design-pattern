import OperatorFactory from '../OperatorFactory'
import OperatorAdd from './OperatorAdd'

export default class OperatorAddFactory implements OperatorFactory{
    createOperator(param1: number, param2: number){
        return new OperatorAdd(param1, param2)
    }
}