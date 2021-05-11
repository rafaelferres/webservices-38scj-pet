import { IGetPets } from '@repositories/IGetPets'
import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export class GetPetsUserCase {
  constructor (private getPets: IGetPets) {}

  async execute (req: express.Request, res: express.Response) {
    try {
      if (req.token && process.env.JWT_TOKEN) {
        jwt.verify(req.token, process.env.JWT_TOKEN, async (err: any, decoded: any) => {
          if (err) {
            res.status(403)
            res.json({ error: 'Expired or invalid authentication credentials' })
          } else {
            const pets = await this.getPets.get(decoded.id)
            res.status(200).json(pets)
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
