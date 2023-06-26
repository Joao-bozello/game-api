import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpException, HttpStatus, UseInterceptors, CacheInterceptor } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@UseInterceptors(CacheInterceptor)
@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}
 // @UseGuards(LocalAuthGuard)
  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createGameDto: CreateGameDto) {
    if(!createGameDto.censorship){
      throw new HttpException('Falta a censura do jogo', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    if(!createGameDto.name){
      throw new HttpException('Falta nome do jogo', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    if(!createGameDto.playerNumber){
      throw new HttpException('Falta a quantidade de jogadores', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    if(!createGameDto.type){
      throw new HttpException('Falta o genero do jogo', HttpStatus.UNPROCESSABLE_ENTITY);
    }
     let result =this.gameService.create(createGameDto).then(data=>{console.log(data)})
     //console.log(result)
    return result;
  }
  //@UseGuards(LocalAuthGuard)
  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.gameService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    if(!updateGameDto.censorship){
      throw new HttpException('Falta a censura do jogo', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    if(!updateGameDto.name){
      throw new HttpException('Falta nome do jogo', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    if(!updateGameDto.playerNumber){
      throw new HttpException('Falta a quantidade de jogadores', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    if(!updateGameDto.type){
      throw new HttpException('Falta o genero do jogo', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    return this.gameService.update(+id, updateGameDto);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameService.remove(+id);
  }
}
