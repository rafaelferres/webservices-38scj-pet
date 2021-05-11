import { ILoginUser, ILoginUserDTO } from '@repositories/ILoginUser'
import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export class LoginUserUseCase {
  constructor (private loginUser: ILoginUser) {}

  async execute (req: express.Request, res: express.Response, user: ILoginUserDTO) {
    if (process.env.JWT_TOKEN) {
      try {
        const data = await this.loginUser.login(user)
        const token = jwt.sign({ id: data.id }, process.env.JWT_TOKEN)
        res.json({ token })
      } catch (err) {
        res.status(401).json({ error: err.message })
      }
    } else {
      res.status(500).json({ error: 'Invalid token' })
    }
  }
}
