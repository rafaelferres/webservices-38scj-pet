import { Entity, Column, ObjectIdColumn } from 'typeorm'

@Entity({ name: 'pets', synchronize: true })
export class Pets {
  @ObjectIdColumn()
  id: number

  @Column()
  name: string

  @Column()
  user: string
}
