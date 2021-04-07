import WorkRequest from './WorkRequest'

export default abstract class Manager {
    // public name: string
    public superior: Manager;

    constructor(public name: string) {
    }

    setSuperior(superior: Manager): Manager{
        this.superior = superior

        return this
    }

    abstract handleRequest(request: WorkRequest): void;
}