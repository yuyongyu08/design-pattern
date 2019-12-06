export default class Stock {
    name: string

    constructor(name: string){
        this.name = name
    }

    buy(prince: number){
        console.log(`股票 ${this.name} 买进价格：${prince}`);
    }

    sell(prince: number){
        console.log(`股票 ${this.name} 卖出价格：${prince}`);
    }
}