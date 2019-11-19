export default class Operator {
    protected param1: number;
    protected param2: number;

    constructor(param1: number, param2: number) {
        this.param1 = param1;
        this.param2 = param2;
    }

    public getResult() {
        let result: number = 0;
        return result;
    }
}