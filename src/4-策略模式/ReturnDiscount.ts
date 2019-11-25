import Discount from './Discount'

//满减
export default class ReturnDiscount extends Discount {
    getDiscountMoney(limit: number, subMoney: number){
        let totalMoney = this.count * this.prince
        return totalMoney >= limit ? subMoney : 0
    }
}