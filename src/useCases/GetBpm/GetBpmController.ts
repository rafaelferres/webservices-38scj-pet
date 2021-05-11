import express from 'express'
import { GetBpmDTO } from './GetBpmDTO'
import { GetBpmUseCase } from './GetBpmUseCase'

export class GetBpmController {
  constructor (private getBpmUseCase: GetBpmUseCase) {}

  async handler (req: express.Request, res: express.Response) {
    const data : GetBpmDTO = req.body
    this.getBpmUseCase.execute(req, res, data.pet)
  }
}
