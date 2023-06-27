import { Module } from '@nestjs/common';
import { GameModule } from 'src/game/game.module';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
 
})
export class DatabaseModule {}