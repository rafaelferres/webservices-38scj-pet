import { Pets } from '@entities/Pets'

export interface IAddPet {
  save(pet: Pets): Promise<void>
}
