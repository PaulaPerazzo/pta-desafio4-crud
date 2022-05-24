import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class School {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name : string

    @Column()
    adress : string

    @Column()
    age : number

}
