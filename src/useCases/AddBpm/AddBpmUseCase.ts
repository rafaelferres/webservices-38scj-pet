import { Heartbeat } from '@entities/Heartbeat'
import { IAddBpm } from '@repositories/IAddBpm'
import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export class AddBpmUseCase {
  constructor (private addBpm: IAddBpm) {}

  async execute (req: express.Request, res: express.Response, heartbeat: Heartbeat) {
    try {
      if (req.token && process.env.JWT_TOKEN) {
        jwt.verify(req.token, process.env.JWT_TOKEN, async (err: any, decoded: any) => {
          if (err) {
            res.status(403)
            res.json({ error: 'Expired or invalid authentication credentials' })
          } else {
            await this.addBpm.save(heartbeat)
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
