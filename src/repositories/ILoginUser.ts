import { Users } from '@entities/Users'

export interface ILoginUserDTO {
    email: string,
    password: string
}

export interface ILoginUser {
  login(user: ILoginUserDTO): Promise<Users>
}
