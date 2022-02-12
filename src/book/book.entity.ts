import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  type: string

  @Column()
  name: string

  @Column({
    type: 'enum',
    enum: ['reading', 'finish', 'unreading'],
    default: 'unreading'
  })
  status: string
  
  @Column({nullable: true})
  score: number
  
  @Column()
  author: string

  @Column()
  publisher: string

  @Column({type: 'date'})
  publishing: Date
}