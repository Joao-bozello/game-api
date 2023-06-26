import { CacheModule, Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { gameProviders } from './game.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [GameController],
  providers: [...gameProviders,
    GameService],
  exports: [GameService],
  imports: [DatabaseModule,CacheModule.register(),],
})
export class GameModule {}
