import { AddPet } from '@repositories/implementations/AddPet'
import { AddPetController } from './AddPetController'
import { AddPetUseCase } from './AddPetUseCase'

const addPet = new AddPet()
const addPetUseCase = new AddPetUseCase(addPet)
const addPetController = new AddPetController(addPetUseCase)

export { addPetController }
