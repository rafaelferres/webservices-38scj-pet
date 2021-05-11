import { Entity, Column, ObjectIdColumn } from 'typeorm'

@Entity({ name: 'users', synchronize: true })
export class Users {
  @ObjectIdColumn()
  id: number

  @Column('string')
  username: string

  @Column('string')
  password: string

  @Column('string')
  email: string
}
