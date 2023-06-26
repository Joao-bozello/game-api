import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Player {
    @PrimaryGeneratedColumn()
    id: number ;

    @Column({ length: 500 })
    nickname: string;

    @Column({ length: 500 })
    email: string;

    @Column({ length: 500 })
    password: string;

   @Column({ type: 'date' })
    birthday: string;
    
    @Column({ length: 500 })
    name: string ;
}
