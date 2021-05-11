import express from 'express'
import { LoginUserDTO } from './LoginUserDTO'
import { LoginUserUseCase } from './LoginUserUseCase'
import crypto from 'crypto'

export class LoginUserController {
  constructor (private loginUserUseCase: LoginUserUseCase) {}

  async handler (req: express.Request, res: express.Response) {
    const data: LoginUserDTO = req.body
    data.password = crypto.createHash('sha256').update(data.password).digest('hex')
    this.loginUserUseCase.execute(req, res, data)
  }
}
