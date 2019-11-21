import Finery from "./Finery"

export default class Suit extends Finery {
    show() {
        console.log('穿上西服 =》')
        super.show()
    }
}