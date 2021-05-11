import express from 'express'
import { GetPetsUserCase } from './GetPetsUseCase'

export class GetPetsController {
  constructor (private getPetsUseCase: GetPetsUserCase) {}

  async handler (req: express.Request, res: express.Response) {
    this.getPetsUseCase.execute(req, res)
  }
}
