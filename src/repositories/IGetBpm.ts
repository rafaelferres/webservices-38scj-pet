import { Heartbeat } from '@entities/Heartbeat'

export interface IGetBpm {
    get(pet: string): Promise<Heartbeat[]>
}
