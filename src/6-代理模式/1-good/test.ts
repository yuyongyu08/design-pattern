import Girl from './Girl'
import Proxy from './Proxy'

let mm = new Girl('Aimily')
let proxy = new Proxy(mm)
proxy.sendFlowers()
proxy.sendChocolate()