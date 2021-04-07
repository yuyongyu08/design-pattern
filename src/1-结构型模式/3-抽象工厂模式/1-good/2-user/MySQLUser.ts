import UserInterface from './UserInterface'
import User from './User'

export default class MySQLUser implements UserInterface{
    insertUser(user: User){
        console.log(`MySQl数据库User表插入一条记录: id = ${user.id}, name = ${user.name}`);
    }

    getUser(id: string): User{
        console.log(`MySQl数据库User表获取一条记录: id: ${id}`);
        
        let user: User = new User(id, 'yuyy');
        return user;
    }
}