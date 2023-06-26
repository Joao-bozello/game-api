import { Controller, Get, Post, UseGuards,  Request, } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private auth:AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  
    @Post('auth/login')
    async login(@Request() req) {
      //console.log(req)
      let token = this.auth.login({email:req.body.email,password:req.body.password})
      return token ;
    }
  

}
