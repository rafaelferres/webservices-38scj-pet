import { Heartbeat } from '@entities/Heartbeat'
import { IAddBpm } from '@repositories/IAddBpm'
import { getConnection } from 'typeorm'

export class AddBpm implements IAddBpm {
  async save (heartbeat: Heartbeat) {
    const repositoryBpm = getConnection().getRepository(Heartbeat)
    repositoryBpm.save(heartbeat)
  }
}
