import Develop from './commad/Develop'

export default class PMO {
    private develops: Develop[]

    constructor(){
        this.develops = []
    }
    
    organizeDevelop(develop: Develop){
        this.develops.push(develop)

        return this
    }

    removeDevelop(develop: Develop){
        let index = this.develops.findIndex(i => i.type == develop.type)
        index > 0 && this.develops.splice(index, 1)
    }

    notify(){
        this.develops.forEach(develop => develop.action())
    }

    finish(){
        this.develops = []
    }
}