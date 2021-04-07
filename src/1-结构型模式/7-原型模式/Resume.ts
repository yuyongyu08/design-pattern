export default class Resume{
    name?: string
    gender?: string
    age?: number
    timeArea?: string
    companyName?: string

    constructor(name: string, gender: string){
        Resume.prototype.name = name
        Resume.prototype.gender  = gender
    }

    setBasicInfo(age: number){
        this.age = age
    }

    setWorkExperience(timeArea: string, companyName: string){
        this.timeArea = timeArea
        this.companyName = companyName
    }

    display(){
        console.log(`姓名：${this.name} 性别：${this.gender} 年龄：${this.age} 于 ${this.timeArea} 期间任职于${this.companyName}`);
    }

    clone(){
        let that = JSON.parse(JSON.stringify(this)) //深拷贝
        Object.setPrototypeOf(that, Object.getPrototypeOf(this))
        return that
    }
}