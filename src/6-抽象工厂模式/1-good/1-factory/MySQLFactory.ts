import FactoryInterface from './FactoryInterface'
import MySQLUser from '../2-user/MySQLUser'

export default class MySQLFactory implements FactoryInterface{
    createUser(){
        return new MySQLUser()
    }

}