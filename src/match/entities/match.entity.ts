import { Game } from 'src/game/entities/game.entity';
import { Player } from 'src/player/entities/player.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity()
export class Match {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => Player,player=> player.id)
    @Column('int')
    player1: number;
    @ManyToOne(() => Player,player=> player.id)
    @Column('int') 
    player2: number;
    @ManyToOne(() => Game,game=> game.id)
    @Column('int') 
    game:  number;
    @Column('int') 
    time: number;
    @ManyToOne(() => Player,player=> player.id)
    @Column('int')
    winner: number;

}
