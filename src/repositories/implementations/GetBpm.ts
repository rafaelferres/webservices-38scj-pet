import { Heartbeat } from '@entities/Heartbeat'
import { IGetBpm } from '@repositories/IGetBpm'
import { getConnection } from 'typeorm'

export class GetBpm implements IGetBpm {
  async get (pet: string): Promise<Heartbeat[]> {
    const repository = getConnection().getRepository(Heartbeat)
    const data = await repository.find({ pet: pet })
    return data
  }
}
