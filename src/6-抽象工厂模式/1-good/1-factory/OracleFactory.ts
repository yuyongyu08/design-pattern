import FactoryInterface from './FactoryInterface'
import OracleUser from '../2-user/OracleUser'

export default class OracleFactory implements FactoryInterface{
    createUser(){
        return new OracleUser()
    }

}