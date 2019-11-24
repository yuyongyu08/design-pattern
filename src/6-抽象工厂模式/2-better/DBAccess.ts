import UserInterface from './user/UserInterface'
import MySQLUser from './user/MySQLUser'
import OracleUser from './user/OracleUser'

export default class DBAccess{
    private db = 'mysql' //oracle

    createUser(): UserInterface{
        let user: any
        switch (this.db) {
            case 'mysql':
                user = new MySQLUser()
                break;
            case 'oracle':
                user = new OracleUser()
                break;
        }

        return user
    }

    //TODO 
    createDepartment(){

    }
}