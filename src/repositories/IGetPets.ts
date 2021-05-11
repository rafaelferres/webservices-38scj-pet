import { Pets } from '@entities/Pets'

export interface IGetPets {
    get(user: string): Promise<Pets[]>
}
