import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { MatchService } from './match.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PlayerService } from 'src/player/player.service';


@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService , private playerService:PlayerService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createMatchDto: CreateMatchDto) {
    if(!createMatchDto){
      throw new HttpException('Erro ao criar partida', HttpStatus.BAD_REQUEST);
    }
    if(!createMatchDto.winner){
      throw new HttpException('Toda partida deve conter um vencedor', HttpStatus.BAD_REQUEST);
    }
    if(createMatchDto.time <1){
      throw new HttpException('Toda partida deve durar ao menos 1 minuto', HttpStatus.BAD_REQUEST);
    }
    let winner = await this.playerService.findOne(createMatchDto.winner)
    console.log(winner)
    return await this.matchService.create(createMatchDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.matchService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchService.findOne(+id);
  }
 
  @Get('winner/:id')
  findmatchWinner(@Param('id') id: number) {
    return this.matchService.findMatchsByWinner(+id);
  }
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatchDto: UpdateMatchDto) {
    if(!updateMatchDto.winner){
      throw new HttpException('Toda partida deve conter um vencedor', HttpStatus.BAD_REQUEST);
    }
    if(updateMatchDto.time <1){
      throw new HttpException('Toda partida deve durar ao menos 1 minuto', HttpStatus.BAD_REQUEST);
    }
   
    return this.matchService.update(+id, updateMatchDto);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    
      throw new HttpException('Partidas não podem ser removidas', HttpStatus.BAD_REQUEST);
    
  }
}


