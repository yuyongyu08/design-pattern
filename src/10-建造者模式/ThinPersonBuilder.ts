import PersonBuilder from './PersonBuilder'

export default class ThinPersonBuilder extends PersonBuilder {
    drawHeader() {
        console.log(`画个小脑袋`);
    }

    drawBody() {
        console.log(`画个小身子`);
    }

    drawHands() {
        console.log(`画双小手`);
    }

    drawFooters() {
        console.log(`画双小脚`);
    }
}