import Operator from './Operator';

export default interface OperatorFactory {
    createOperator(param1: number, param2: number): Operator
}