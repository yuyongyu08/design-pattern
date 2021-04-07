import News from './News'
import Channel from './Channel'

export default class SportChannel extends Channel {
    private newsList: News[] = []

    addNews(news: News) {
        this.newsList.push(news)

        this.notifyReader(news)
    }
}