import UserInterface from '../2-user/UserInterface'

export default interface FactoryInterface {
    createUser(): UserInterface
}