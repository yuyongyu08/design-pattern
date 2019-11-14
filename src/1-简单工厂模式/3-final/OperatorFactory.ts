import OperatorAdd from './OperatorAdd';
import OperatorSub from './OperatorSub';
import OperatorMul from './OperatorMul';
import OperatorDiv from './OperatorDiv';

export default class OperatorFactory{
    static createOperate(operator: string, param1: number, param2: number){
        let operate: any = null;
        switch (operator){
            case '+':
                operate = new OperatorAdd(param1, param2);
                break;
            case '-':
                operate = new OperatorSub(param1, param2);
                break;
            case '*':
                operate = new OperatorMul(param1, param2);
                break;
            case '/':
                operate = new OperatorDiv(param1, param2);
                break;
        }

        return operate;
    }
}