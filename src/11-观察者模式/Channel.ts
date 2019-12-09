import Reader from './Reader'
import News from './News'

export default class Channel {
    protected readerList: Reader[] = [];

    addReader(reader: Reader): void {
        this.readerList.push(reader)
    }

    deleteReader(reader: Reader): void {
        this.readerList.splice(this.readerList.findIndex((item) => item.name === reader.name), 1)
    }

    notifyReader(news: News) {
        this.readerList.forEach(reader => reader.getPushNews(news))
    }
}