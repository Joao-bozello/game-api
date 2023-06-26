import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { playerProviders } from './player.providers';
import { DatabaseModule } from 'src/database/database.module';


@Module({
  controllers: [PlayerController],
  providers: [
    ...playerProviders,
    PlayerService],
  exports: [PlayerService],
  imports: [DatabaseModule],
})
export class PlayerModule {}
