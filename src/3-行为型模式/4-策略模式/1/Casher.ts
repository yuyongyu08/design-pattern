import Discount from '../Discount'
import ReturnDiscount from '../ReturnDiscount'
import RateDiscount from '../RateDiscount'
import { CasherParams } from './type'

export default class Casher{
    count: number
    prince: number
    discountType: string
    limit: number
    subMoney: number
    rate: number

    constructor(params: CasherParams){
        this.count = params.count
        this.prince = params.prince
        this.discountType = params.discountType
        this.limit = params.limit
        this.subMoney = params.subMoney
        this.rate = params.rate
    }

    getDiscountResult(){
        let discount = null
        let discountMoney = 0        

        switch (true) {
            case this.discountType === 'return':
                discount = new ReturnDiscount(this.count, this.prince)
                discountMoney = discount.getDiscountMoney(this.limit, this.subMoney)
                break
            case this.discountType === 'rate':
                discount = new RateDiscount(this.count, this.prince)
                discountMoney = discount.getDiscountMoney(this.rate)
                break
        
            default:
                discount = new Discount(this.count, this.prince)
                discountMoney = discount.getDiscountMoney()
                break
        }

        return discountMoney
    }

    getFinalMoney(){
        return this.count * this.prince - this.getDiscountResult()
    }
}