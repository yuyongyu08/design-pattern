import Casher from './Casher'
import { CasherParams, DiscountParams } from './type.d'

//正常
let casherParams: CasherParams = {
    count: 10,
    prince: 5.5,
}
let discountParams: DiscountParams = {
    discountType: ''
}

let casher = new Casher(casherParams)
casher.calculateDiscountMoney('')

console.log(`数量：${casherParams.count} 单价：${casherParams.prince} 总金额：${casher.getFinalMoney()}`);

//满减
casherParams = {
    count: 100,
    prince: 5.5,
}

discountParams = {
    discountType: 'return',
    limit: 200,
    subMoney: 50 
}

casher = new Casher(casherParams)
casher.calculateDiscountMoney(discountParams.discountType, discountParams.limit, discountParams.subMoney)

console.log(`数量：${casherParams.count} 单价：${casherParams.prince} 总金额：${casher.getFinalMoney()}(满200减50)`);

//折扣
casherParams = {
    count: 100,
    prince: 6
}

discountParams = {
    discountType: 'rate',
    rate: 0.5
}

casher = new Casher(casherParams)
casher.calculateDiscountMoney(discountParams.discountType, discountParams.rate)
console.log(`数量：${casherParams.count} 单价：${casherParams.prince} 总金额：${casher.getFinalMoney()}（五折）`);


//TODO 如果要增加一种折扣（比如满5斤半价），怎么Casher修改最小？