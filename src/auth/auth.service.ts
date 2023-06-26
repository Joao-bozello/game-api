import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PlayerService } from '../player/player.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(private usersService: PlayerService,
    private jwtService: JwtService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    
    const user = await this.usersService.findByEmail(email);
    console.log(user)
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(login: any) {
    const payload = { email: login.email, pass: login.password };
    const user = await this.usersService.findByEmail(payload.email);
    console.log(user)
    if (user && user.password === login.password) {
      const { password, ...result } = user;
      return {
        access_token: this.jwtService.sign(payload),
      };
    } else {
      throw new UnauthorizedException();
    }
   
  }
}