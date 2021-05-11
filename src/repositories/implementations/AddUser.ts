import { Users } from '@entities/Users'
import { IAddUser } from '@repositories/IAddUser'
import { getConnection } from 'typeorm'

export class AddUser implements IAddUser {
  async save (user: Users) {
    const userRepository = getConnection().getRepository(Users)
    await userRepository.save(user)
  }
}
