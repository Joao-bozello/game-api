
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
@Injectable()
export class PlayerService {
  constructor(
    @Inject('PLAYER_REPOSITORY')
    private playerRepository: Repository<Player>,
  ) {}
  create(createPlayerDto: CreatePlayerDto) {
   let player = this.playerRepository.save(createPlayerDto).catch(e=>console.log(e));
   console.log(player)
    return player 
  }

  findAll() {
    return this.playerRepository.find();
  }

  findOne(id: number) {
  return this.playerRepository.find(
    {
    
          where: {
              id:id
          },
          take: 1 
      })

  }
  
  async findByEmail(email: string) {
    console.log(email)
    return await this.playerRepository.findOne(
      {
      
            where: {
                email: email
            }
        })
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return this.playerRepository.update(id,updatePlayerDto)
  }

  remove(id: number) {
    return this.playerRepository.delete(id)
  }
}
