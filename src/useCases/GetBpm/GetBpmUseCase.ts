import express from 'express'

import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { IGetBpm } from '@repositories/IGetBpm'
dotenv.config()

export class GetBpmUseCase {
  constructor (private getBpm: IGetBpm) {}

  async execute (req: express.Request, res: express.Response, pet: string) {
    try {
      if (req.token && process.env.JWT_TOKEN) {
        jwt.verify(req.token, process.env.JWT_TOKEN, async (err: any, decoded: any) => {
          if (err) {
            res.status(403)
            res.json({ error: 'Expired or invalid authentication credentials' })
          } else {
            const data = await this.getBpm.get(pet)
            res.status(200).json(data)
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
