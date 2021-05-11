import { Pets } from '@entities/Pets'
import { IAddPet } from '@repositories/IAddPet'
import { getConnection } from 'typeorm'

export class AddPet implements IAddPet {
  async save (pet: Pets) {
    const petRepository = getConnection().getRepository(Pets)
    await petRepository.save(pet)
  }
}
