import { Heartbeat } from '@entities/Heartbeat'
import express from 'express'
import { AddBpmDTO } from './AddBpmDTO'
import { AddBpmUseCase } from './AddBpmUseCase'

export class AddBpmController {
  constructor (private addBpmUseCase: AddBpmUseCase) {}

  async handler (req: express.Request, res: express.Response) {
    const data: AddBpmDTO = req.body
    const heartbeat = new Heartbeat()
    heartbeat.pet = data.pet
    heartbeat.bpm = data.bpm
    heartbeat.time = new Date()

    this.addBpmUseCase.execute(req, res, heartbeat)
  }
}
