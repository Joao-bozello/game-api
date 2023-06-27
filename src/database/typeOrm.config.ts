import { Game } from '../game/entities/game.entity';
import { Match } from '../match/entities/match.entity';
import { Player } from '../player/entities/player.entity';
import { DataSource } from 'typeorm';


 
export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'game',
    entities: [
        Game,
        Player,
        Match
    ],  
    migrations: [`../../migrations`],
    migrationsTableName: "custom_migration_table",
    synchronize: true,
  });
  