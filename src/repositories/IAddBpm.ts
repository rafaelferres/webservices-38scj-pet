import { Heartbeat } from '@entities/Heartbeat'

export interface IAddBpm {
    save(heartbeat: Heartbeat): Promise<void>
}
