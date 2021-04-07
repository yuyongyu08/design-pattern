import PersonBuilder from './PersonBuilder'

export default class FatPersonBuilder extends PersonBuilder {
    drawHeader() {
        console.log(`画个大脑袋`);
    }

    drawBody() {
        console.log(`画个大身子`);
    }

    drawHands() {
        console.log(`画双大手`);
    }

    drawFooters() {
        console.log(`画双大脚`);
    }
}