import { Users } from '@entities/Users'
import { ILoginUser, ILoginUserDTO } from '@repositories/ILoginUser'
import { getConnection } from 'typeorm'

export class LoginUser implements ILoginUser {
  async login (data: ILoginUserDTO) {
    const userRepository = getConnection().getRepository(Users)
    const user = await userRepository.findOne({ where: { email: data.email, password: data.password } })
    if (user) {
      return user
    } else {
      throw Error('Usuário ou senha inválidos')
    }
  }
}
