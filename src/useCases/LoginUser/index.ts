import { LoginUser } from '@repositories/implementations/LoginUser'
import { LoginUserController } from './LoginUserController'
import { LoginUserUseCase } from './LoginUserUseCase'

const loginUser = new LoginUser()
const loginUserUseCase = new LoginUserUseCase(loginUser)
const loginUserController = new LoginUserController(loginUserUseCase)

export { loginUserController }
