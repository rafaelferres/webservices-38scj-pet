import { AddUser } from '@repositories/implementations/AddUser'
import { AddUserController } from './AddUserController'
import { AddUserUseCase } from './AddUserUseCase'

const addUser = new AddUser()
const addUserUseCase = new AddUserUseCase(addUser)
const addUserController = new AddUserController(addUserUseCase)

export { addUserController }
