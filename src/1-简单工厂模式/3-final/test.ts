let readlineSync = require('readline-sync');
import OperatorFactory from './OperatorFactory'

try {
    let param1 = readlineSync.question('请输入第一个数字：');
    let operator = readlineSync.question('请输入运算符（+、—、*、/）：');
    let param2 = readlineSync.question('请输入第二个数字：');
    
    let operate  = OperatorFactory.createOperate(operator, param1, param2)
    let result = operate.getResult()

    console.log('计算结果是：', result);
} catch (error) {
    console.error(error)
}