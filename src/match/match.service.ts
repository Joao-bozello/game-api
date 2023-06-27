import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { Match } from './entities/match.entity';

@Injectable()
export class MatchService {
  constructor(
    @Inject('MATCH_REPOSITORY')
    private matchRepository: Repository<Match>,
  ) {}
  async create(createMatchDto: CreateMatchDto) {
   
    return await this.matchRepository.save(createMatchDto).catch(e=>console.log(e))
  
  }

  findAll() {
    return this.matchRepository.find();
  }

  findOne(id: number) {
    return this.matchRepository.findOne(
    {
    
      where: {
          id:id
      },
     
  })
}
findMatchsByWinner(id: number) {
  return this.matchRepository  .createQueryBuilder("match")
  .leftJoinAndSelect("match.winner", "winner")
  .leftJoinAndSelect("match.game", "game")
  .where('match.game = :id', { id: id })
  .getMany()
}

  update(id: number, updateMatchDto: UpdateMatchDto) {
    return this.matchRepository.update(id,updateMatchDto);
  }

  remove(id: number) {
    return this.matchRepository.delete(id);
  }
}
