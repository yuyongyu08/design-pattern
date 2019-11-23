import Discount from '../Discount'
import ReturnDiscount from '../ReturnDiscount'
import RateDiscount from '../RateDiscount'
import { CasherParams, DiscountParams } from './type'

export default class Casher{
    count: number
    prince: number
    discountParams: DiscountParams
    

    constructor(params: CasherParams){
        this.count = params.count
        this.prince = params.prince
        this.discountParams = params.discount
    }

    private getDiscountResult(){
        let discount = null
        let discountMoney = 0        

        switch (true) {
            case this.discountParams.type === 'return':
                discount = new ReturnDiscount(this.count, this.prince)
                discountMoney = discount.getDiscountMoney(this.discountParams.limit, this.discountParams.subMoney)
                break
            case this.discountParams.type === 'rate':
                discount = new RateDiscount(this.count, this.prince)
                discountMoney = discount.getDiscountMoney(this.discountParams.rate)
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