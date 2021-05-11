import { Pets } from '@entities/Pets'
import { IGetPets } from '@repositories/IGetPets'
import { getConnection } from 'typeorm'

export class GetPets implements IGetPets {
  async get (user: string): Promise<Pets[]> {
    const petsRepositories = getConnection().getRepository(Pets)
    const pets = await petsRepositories.find({ user: user })
    return pets
  }
}
