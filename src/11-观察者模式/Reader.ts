import News from './News'

export default class Reader {
    name: string

    constructor(name: string) { 
        this.name = name
    }

    getPushNews(news: News) {
        console.log(`${this.name}，你订阅的${news.type}频道有信息：${news.content}}`);
    }
}