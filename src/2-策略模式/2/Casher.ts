import Discount from '../Discount'
import ReturnDiscount from '../ReturnDiscount'
import RateDiscount from '../RateDiscount'
import { CasherParams } from './type.d'

export default class Casher{
    count: number
    prince: number
    private discountMoney: number

    constructor(params: CasherParams){
        this.count = params.count
        this.prince = params.prince
        this.discountMoney = 0
    }

    private getDiscount(discountType: string){
        let discount = null
        switch (true) {
            case discountType === 'return':
                discount = new ReturnDiscount(this.count, this.prince)
                break
            case discountType === 'rate':
                discount = new RateDiscount(this.count, this.prince)
                break
        
            default:
                discount = new Discount(this.count, this.prince)
                break
        }

        return discount
    }

    calculateDiscountMoney(discountType:string , ...params: any){
        let discount = this.getDiscount(discountType)
        this.discountMoney = discount.getDiscountMoney(...params)
    }

    getFinalMoney(){
        return this.count * this.prince - this.discountMoney
    }
}