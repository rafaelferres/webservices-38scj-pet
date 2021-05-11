import { AddBpm } from '@repositories/implementations/AddBpm'
import { AddBpmController } from './AddBpmController'
import { AddBpmUseCase } from './AddBpmUseCase'

const addBpm = new AddBpm()
const addBpmUseCase = new AddBpmUseCase(addBpm)
const addBpmController = new AddBpmController(addBpmUseCase)

export { addBpmController }
