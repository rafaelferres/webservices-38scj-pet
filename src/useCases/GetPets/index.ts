import { GetPets } from '@repositories/implementations/GetPets'
import { GetPetsController } from './GetPetsController'
import { GetPetsUserCase } from './GetPetsUseCase'

const getPets = new GetPets()
const getPetsUseCase = new GetPetsUserCase(getPets)
const getPetsController = new GetPetsController(getPetsUseCase)

export { getPetsController }
