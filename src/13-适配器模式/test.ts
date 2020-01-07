import Forward from './Forword'
import Center from './Center'
import Guard from './Guard'
import Translator from './Translator'

let forward: Forward = new Forward('巴蒂尔')
forward.attack()
forward.defense()


let center: Center = new Center(`霍华德`)
center.attack()
center.defense()

let guard: Guard = new Guard(`艾弗森`)
guard.attack()
guard.defense()

let translator: Translator = new Translator('姚明')
translator.attack()
translator.defense()