import Developer from "./Developer"

export default class FE extends Developer {
    program(task: string) {
        console.log(`前端：${task}`);
    }

    test() {
        console.log('前端自测');
    }
}