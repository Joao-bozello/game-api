import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Game {

    @PrimaryGeneratedColumn()
    id: number ;
    @Column({ length: 500 })
    name: string ;
    @Column('int')  
    censorship: string ;
    @Column({ length: 500 })
    type: string ;
    @Column('int') 
    playerNumber: number 

}
