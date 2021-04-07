import Developer from "./Developer"

export default class QA extends Developer{
    test(task: string){
        console.log(`QA：${task}`);
    }
}