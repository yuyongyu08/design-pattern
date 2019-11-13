let readlineSync = require('readline-sync');

let param1 = readlineSync.question('请输入第一个数字：');
let operator = readlineSync.question('请输入运算符（+、—、*、/）：');
let param2 = readlineSync.question('请输入第二个数字：');

var result = 0;
switch (operator) {
    case '+':
        result = param1 + param2;
        break;
    case '-':
        result = param1 - param2;
        break;
    case '*':
        result = param1 * param2;
        break;
    case '/':
        result = param1 / param2;
        break;
}

console.log('计算结果是：', result);