import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Horse {
    @PrimaryGeneratedColumn()
    id : number
    @Column()
    name : string
    @Column() 
    age : number

}