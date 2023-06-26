import { CacheInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { PlayerModule } from './player/player.module';
import { MatchModule } from './match/match.module';
import { AuthModule } from './auth/auth.module';
import { CacheModule } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';
import type { RedisClientOptions } from 'redis';
import * as redisStore from 'cache-manager-redis-store';
@Module({
  imports: [CacheModule.register<RedisClientOptions>({
    store: redisStore,

    // Store-specific configuration:
    host: 'localhost',
    port: 6379,
  }),GameModule, PlayerModule, MatchModule, AuthModule,],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_INTERCEPTOR,
    useClass: CacheInterceptor,
  },],
})
export class AppModule {}
