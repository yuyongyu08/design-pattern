let readlineSync = require('readline-sync');

let a = readlineSync.question('请输入第一个数字：');
let operator = readlineSync.question('请输入运算符（+、—、*、/）：');
let b = readlineSync.question('请输入第二个数字：');

var result = 0;
switch (operator) {
    case '+':
        result = a + b;
        break;
    case '-':
        result = a - b;
        break;
    case '*':
        result = a * b;
        break;
    case '/':
        result = a / b;
        break;
}

console.log('计算结果是：', result);