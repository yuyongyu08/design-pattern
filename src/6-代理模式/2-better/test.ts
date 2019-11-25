import Pursuit from './Pursuit'
import Girl from './Girl'
import Proxy from './Proxy'

let gg = new Pursuit('杨过')
let mm = new Girl('小龙女')
let proxy = new Proxy(gg, mm)
proxy.sendFlowers()
proxy.sendChocolate()

gg = new Pursuit('柯景腾')
mm = new Girl('沈佳宜')
proxy = new Proxy(gg, mm)
proxy.sendFlowers()
proxy.sendChocolate()



