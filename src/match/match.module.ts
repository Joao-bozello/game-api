import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchController } from './match.controller';
import { matchProviders } from './match.providers';
import { DatabaseModule } from 'src/database/database.module';
import { PlayerService } from 'src/player/player.service';
import { PlayerModule } from 'src/player/player.module';

@Module({
  controllers: [MatchController],
  providers: [ 
    ...matchProviders,
    MatchService,
   ],
   exports:[MatchService],
   imports: [DatabaseModule,PlayerModule],
})
export class MatchModule {}
