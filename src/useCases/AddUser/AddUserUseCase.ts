import { Users } from '@entities/Users'
import { IAddUser } from '@repositories/IAddUser'
import express from 'express'

export class AddUserUseCase {
  constructor (private addUser: IAddUser) {}

  async execute (req: express.Request, res: express.Response, user: Users) {
    try {
      await this.addUser.save(user)
      res.sendStatus(201)
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }
}
