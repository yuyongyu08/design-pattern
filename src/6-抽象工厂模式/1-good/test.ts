import User from './2-user/User'
import MySQLFactory from './1-factory/MySQLFactory'
import OracleFactory from './1-factory/OracleFactory'

let user = new User('123', 'yuyongyu')

//切换数据库
let db = new MySQLFactory()
// let db = new OracleFactory()

let table = db.createUser()
table.insertUser(user)
table.getUser(user.id)


