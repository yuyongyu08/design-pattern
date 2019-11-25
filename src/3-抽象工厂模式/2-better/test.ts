import DBAccess from './DBAccess'

import User from './user/User'

let user = new User('123', 'yuyongyu')

//切换数据库封装于DBAccess内
let db = new DBAccess()
let table = db.createUser()
table.insertUser(user)
table.getUser(user.id)


