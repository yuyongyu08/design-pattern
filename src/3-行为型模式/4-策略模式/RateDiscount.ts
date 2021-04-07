import Discount from './Discount'

//折扣
export default class RateDiscount extends Discount{
    getDiscountMoney(rate: number){
        return this.count * this.prince * (1 - rate)
    }
}