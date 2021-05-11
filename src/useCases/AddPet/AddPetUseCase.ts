import { Pets } from '@entities/Pets'
import { IAddPet } from '@repositories/IAddPet'
import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export class AddPetUseCase {
  constructor (private addPet: IAddPet) {}

  async execute (req: express.Request, res: express.Response, pet: Pets) {
    try {
      if (req.token && process.env.JWT_TOKEN) {
        jwt.verify(req.token, process.env.JWT_TOKEN, async (err: any, decoded: any) => {
          if (err) {
            res.status(403)
            res.json({ error: 'Expired or invalid authentication credentials' })
          } else {
            pet.user = decoded.id
            await this.addPet.save(pet)
            res.sendStatus(201)
          }
        })
      } else {
        throw new Error('Invalid token')
      }
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }
}
