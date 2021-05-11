import { Entity, Column, ObjectIdColumn } from 'typeorm'

@Entity({ name: 'pets', synchronize: true })
export class Pets {
  @ObjectIdColumn()
  id: number

  @Column('string')
  name: string

  @Column('string')
  user: string
}
