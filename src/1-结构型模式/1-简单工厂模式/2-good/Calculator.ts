export default class Calculator{
    public static getResult(operator: string, param1: number, param2: number){
        let result: number = 0;
        switch(operator){
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

        return result
    }
}