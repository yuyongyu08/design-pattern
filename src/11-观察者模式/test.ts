import Reader from './Reader'
import News from './News'
import SportChannel from './SportChannel'

let yuyy = new Reader('yuyy')
let yyy = new Reader('yyy')
let yuyongyu = new Reader('yyuyongyu')

let sportChannel = new SportChannel()
sportChannel.addReader(yuyy)
sportChannel.addReader(yyy)
sportChannel.addReader(yuyongyu)

let news = new News('sport', 'CBA外援薪资惊人....')
sportChannel.addNews(news)


sportChannel.deleteReader(yyy)
news = new News('sport', 'NBA停摆 再现资本失能')

sportChannel.addNews(news)

