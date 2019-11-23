import Finery from "./Finery"

export default class Suit extends Finery {
    show() {
        super.show()

        console.log('穿上西服 =》')
    }
}