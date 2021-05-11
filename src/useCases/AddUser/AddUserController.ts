import { Users } from '@entities/Users'
import express from 'express'
import { AddUserDTO } from './AddUserDTO'
import { AddUserUseCase } from './AddUserUseCase'
import crypto from 'crypto'

export class AddUserController {
  constructor (private addUserUseCase: AddUserUseCase) {}

  async handler (req: express.Request, res: express.Response) {
    const data : AddUserDTO = req.body
    const user = new Users()
    user.email = data.email
    user.password = crypto.createHash('sha256').update(data.password).digest('hex')
    user.username = data.username
    this.addUserUseCase.execute(req, res, user)
  }
}
