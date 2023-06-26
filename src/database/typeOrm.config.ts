import { DataSource } from 'typeorm';


 
export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'game',
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],  
    migrations: [`../../migrations`],
    migrationsTableName: "custom_migration_table",
    synchronize: true,
  });
  