export default class Discount{
    count: number
    prince: number

    constructor(count: number, prince: number){
        this.count = count;
        this.prince = prince;
    }

    getDiscountMoney(...condition: any){
        return 0
    }
}