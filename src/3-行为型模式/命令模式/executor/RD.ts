  
import Developer from "./Developer"

export default class RD extends Developer{
    program(task: string) {
        console.log(`后端：${task}`);
    }

    test(){
        console.log('后端自测');
    }
}