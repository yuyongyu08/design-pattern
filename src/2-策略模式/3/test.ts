import Casher from './Casher'
import { CasherParams } from './type.d'

//正常
let params: CasherParams = {
    count: 10,
    prince: 5.5,
    discount: {
        type: ''
    }
}
let casher = new Casher(params)
console.log(`数量：${params.count} 单价：${params.prince} 总金额：${casher.getFinalMoney()}`);

//满减
params = {
    count: 100,
    prince: 5.5,
    discount: {
        type: 'return',
        limit: 200,
        subMoney: 50 
    }
    
}

casher = new Casher(params)
console.log(`数量：${params.count} 单价：${params.prince} 总金额：${casher.getFinalMoney()}(满200减50)`);

//折扣
params = {
    count: 100,
    prince: 6,
    discount: {
        type: 'rate',
        rate: 0.5
    }
}

casher = new Casher(params)
console.log(`数量：${params.count} 单价：${params.prince} 总金额：${casher.getFinalMoney()}（五折）`);


//TODO 如果要增加一种折扣（比如满5斤半价），怎么Casher修改最小？