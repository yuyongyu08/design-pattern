import Stock from './Stock'

export default class Fund {
    apple: Stock
    google: Stock
    nike: Stock

    constructor() {
        this.apple = new Stock('APPL')
        this.google = new Stock('GOOG')
        this.nike = new Stock('NIKE')
    }

    buy(){
        this.apple.buy(109)
        this.google.buy(203)
        this.nike.buy(30)
    }

    sell(){
        this.apple.sell(120)
        this.google.sell(201)
        this.nike.sell(37)
    }
}