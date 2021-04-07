export default class TestPaper{
    studentName: string

    constructor(studentName: string){
        this.studentName = studentName
    }

    question1(){
        console.log(`1.以下哪个不是JS中的数据类型？(${this.answer1()})`)
        console.log('A.string')
        console.log('B.null')
        console.log('C.undefine')
        console.log('D.array')
    }

    answer1(){
        return ''
    }

    question2(){
        console.log(`2.以下哪个HTTP状态码和缓存相关？(${this.answer2()})`)
        console.log('A.200')
        console.log('B.304')
        console.log('C.404')
        console.log('D.500')
    }

    answer2(){
        return ''
    }

    question3(){
        console.log(`3.JS中数组在调用以下哪个内置方法时自身不会改变？(${this.answer3()})`)
        console.log('A.slice()')
        console.log('B.push()')
        console.log('C.unshift()')
        console.log('D.splice()')
    }

    answer3(){
        return ''
    }

    display(){
        console.log(`考生姓名：${this.studentName}`)
        
        this.question1()
        this.question2()
        this.question3()
    }
}