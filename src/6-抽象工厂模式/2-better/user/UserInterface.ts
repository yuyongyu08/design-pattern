import User from './User'

export default interface UserInterface{
    insertUser(user: User): void
    getUser(id: string): User
}