import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Student {

    // identificar através de um número, sendo indexado fica mais fácil encontrar dados
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    school : string

    @Column()
    name : string

}
