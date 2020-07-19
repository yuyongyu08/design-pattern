import Manager from './Manager'
import WorkRequest from './WorkRequest'
import RequestType from './RequestType'

export default class BusinessDirector extends Manager {
    constructor(name: string) {
        super(name)
    }

    handleRequest(request: WorkRequest): void {
        if (request.type == RequestType.Leave) {
            if (request.count <= 10) {
                console.log(`${this.name}：审批通过`);
            } else {
                console.log(`${this.name}：审批通过，报请${this.superior.name}审批`);
                this.superior.handleRequest(request)
            }
        } else if (request.type == RequestType.Overtime) {
            if (request.count <= 3) {
                console.log(`${this.name}：审批通过`);
            } else {
                console.log(`${this.name}：审批通过，报请${this.superior.name}审批`);
                this.superior.handleRequest(request)
            }
        } else{
            console.log(`${this.name}：内部研究下`);
        }
    }
}