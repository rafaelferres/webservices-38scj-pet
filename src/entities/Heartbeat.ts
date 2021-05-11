import { Entity, Column, ObjectIdColumn } from 'typeorm'

@Entity({ name: 'heartbeat', synchronize: true })
export class Heartbeat {
  @ObjectIdColumn()
  id: number

  @Column()
  pet: string

  @Column()
  bpm: number

  @Column()
  time: Date
}
