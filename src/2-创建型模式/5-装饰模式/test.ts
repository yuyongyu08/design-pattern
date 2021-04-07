import Person from './Person'
import TShirts from './TShirts'
import Suit from './Suit'
import Tie from './Tie'

let person = new Person('yuyy')

let tshirt = new TShirts()
let suit = new Suit()
let tie = new Tie()

tshirt.decorate(person)
suit.decorate(tshirt)
tie.decorate(suit)
tie.show()
