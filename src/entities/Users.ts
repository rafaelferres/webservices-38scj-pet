import { Entity, Column, ObjectIdColumn } from 'typeorm'

@Entity({ name: 'users', synchronize: true })
export class Users {
  @ObjectIdColumn()
  id: number

  @Column()
  username: string

  @Column()
  password: string

  @Column()
  email: string
}
