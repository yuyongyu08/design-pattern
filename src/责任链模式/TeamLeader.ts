import Manager from './Manager'
import WorkRequest from './WorkRequest'
import RequestType from './RequestType'

export default class TeamLeader extends Manager {
    constructor(name: string) {
        super(name)
    }

    handleRequest(request: WorkRequest): void {
        console.log(`***********${request.content}***********`);

        if (request.type == RequestType.Leave) {
            if (request.count <= 1) {
                console.log(`${this.name}：审批通过`);
            } else {
                console.log(`${this.name}：审批通过，报请${this.superior.name}审批`);
                this.superior.handleRequest(request)
            }
        } else if (request.type == RequestType.Overtime) {
            console.log(`${this.name}：审批通过，报请${this.superior.name}审批`);
            this.superior.handleRequest(request)
        } else {
            console.log(`${this.name}：无权审批，报请${this.superior.name}审批`);
            this.superior.handleRequest(request)
        }
    }
}