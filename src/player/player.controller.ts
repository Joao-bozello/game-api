import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, UseGuards, Put } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  async create(@Body() createPlayerDto: CreatePlayerDto) {
    if(!createPlayerDto.birthday){
      throw new HttpException('Falta idade do jogador', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    if(!createPlayerDto.name){
      throw new HttpException('Falta nome do jogador', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    if(!createPlayerDto.email){
      throw new HttpException('Falta idade do jogador', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    if(!createPlayerDto.nickname){
      throw new HttpException('Falta nome de usuario do jogador', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    if(!createPlayerDto.password){
      throw new HttpException('Falta senha do jogador', HttpStatus.UNPROCESSABLE_ENTITY);
    }

  

    if(createPlayerDto.password.length <8 ){
      throw new HttpException('Senha deve possuir ao menos 8 caracteres', HttpStatus.BAD_REQUEST);
    }

    const playerExist = await this.playerService.findByEmail(createPlayerDto.email)
    console.log(playerExist)
    if(playerExist){
      throw new HttpException('Email ja utilizado', HttpStatus.BAD_REQUEST);
    }
    return this.playerService.create(createPlayerDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.playerService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(+id);
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    if(!updatePlayerDto.birthday){
      throw new HttpException('Falta idade do jogador', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    if(!updatePlayerDto.name){
      throw new HttpException('Falta nome do jogador', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    if(!updatePlayerDto.email){
      throw new HttpException('Falta idade do jogador', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    if(!updatePlayerDto.nickname){
      throw new HttpException('Falta nome de usuario do jogador', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    if(!updatePlayerDto.password){
      throw new HttpException('Falta senha do jogador', HttpStatus.UNPROCESSABLE_ENTITY);
    }

    //regras de negocio
  

    if(updatePlayerDto.password.length <8 ){
      throw new HttpException('Senha deve possuir ao menos 8 caracteres', HttpStatus.BAD_REQUEST);
    }
    this.playerService.findByEmail(updatePlayerDto.email).then(data=>{
      let player = data;
      console.log(data)
      if(!player){
    
        throw new HttpException('Email não pode ser alterado', HttpStatus.BAD_REQUEST);
     
    }
    })
   
    return this.playerService.update(+id, updatePlayerDto);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerService.remove(+id);
  }
}
