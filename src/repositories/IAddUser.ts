import { Users } from '@entities/Users'

export interface IAddUser {
  save(user: Users): Promise<void>
}
