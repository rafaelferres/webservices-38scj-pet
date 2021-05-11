import { Pets } from '@entities/Pets'
import express from 'express'
import { AddPetDTO } from './AddPetDTO'
import { AddPetUseCase } from './AddPetUseCase'

export class AddPetController {
  constructor (private addPetUseCase: AddPetUseCase) {}

  async handler (req: express.Request, res: express.Response) {
    const data: AddPetDTO = req.body
    const pet = new Pets()
    pet.name = data.name
    this.addPetUseCase.execute(req, res, pet)
  }
}
