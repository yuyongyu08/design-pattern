import Manager from './Manager'
import WorkRequest from './WorkRequest'
import RequestType from './RequestType'

export default class HRBP extends Manager {
    constructor(name: string) {
        super(name)
    }

    handleRequest(request: WorkRequest): void {
        if (request.type == RequestType.Leave) {
            console.log(`${this.name}：审批通过`);
        } else if (request.type == RequestType.Overtime) {
            console.log(`${this.name}：审批通过`);
        } else {
            console.log(`${this.name}：无审批权限`);
        }
    }
}