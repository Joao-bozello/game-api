import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

import { PlayerModule } from 'src/player/player.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [PlayerModule, PassportModule, 
    JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '6000s' },
  }),],
  providers: [AuthService, LocalStrategy,JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
