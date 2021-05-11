import { GetBpm } from '@repositories/implementations/GetBpm'
import { GetBpmController } from './GetBpmController'
import { GetBpmUseCase } from './GetBpmUseCase'

const getBpm = new GetBpm()
const getBpmUseCase = new GetBpmUseCase(getBpm)
const getBpmController = new GetBpmController(getBpmUseCase)

export { getBpmController }
