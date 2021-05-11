import { Entity, Column, ObjectIdColumn } from 'typeorm'

@Entity({ name: 'heartbeat', synchronize: true })
export class Heartbeat {
  @ObjectIdColumn()
  id: number

  @Column('string')
  pet: string

  @Column('number')
  bpm: number

  @Column('timestamp')
  time: Date
}
