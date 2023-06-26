import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  constructor(
    @Inject('GAME_REPOSITORY')
    private gameRepository: Repository<Game>,
  ) {}
  async create(createGameDto: CreateGameDto) {
    return await this.gameRepository.save(createGameDto).catch(e=>console.log(e))
  }

  findAll() {
    return this.gameRepository.find();
  }

  findOne(id: number) {
   return this.gameRepository.findOne(
    {
    
          where: {
              id:id
          },
         
      })

  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return this.gameRepository.update(id,updateGameDto);
  }

  remove(id: number) {
    return this.gameRepository.delete(id);
  }
}
