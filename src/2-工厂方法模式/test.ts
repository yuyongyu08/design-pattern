let readlineSync = require('readline-sync');
import Operator from './Operator'
import OperatorAddFactory from './add/OperatorAddFactory'
import OperatorSubFactory from './sub/OperatorSubFactory'
import OperatorMulFactory from './mul/OperatorMulFactory'
import OperatorDivFactory from './div/OperatorDivFactory'

try {
    let param1 = readlineSync.question('请输入第一个数字：');
    let operator = readlineSync.question('请输入运算符（+、—、*、/）：');
    let param2 = readlineSync.question('请输入第二个数字：');

    let operateFactory: any
    let operate: Operator 

    switch (operator) {
        case '+':
            operateFactory = new OperatorAddFactory();
            break;
        case '-':
            operateFactory = new OperatorSubFactory();
            break;
        case '*':
            operateFactory = new OperatorMulFactory();
            break;
        case '/':
            operateFactory = new OperatorDivFactory();
            break;
    }

    operate = operateFactory.createOperator(param1, param2)
    let result = operate.getResult()

    console.log('计算结果是：', result);
} catch (error) {
    console.error(error)
}

//TODO 弊端：相比于简单工厂模式，虽然每增加一个计算类，不需要修改计算工厂类（OperatorFactory），但需要修改客户端代码
//解决：抽象工厂模式，反射