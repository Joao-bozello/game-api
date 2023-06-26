import { PartialType } from '@nestjs/mapped-types';
import { CreateGameDto } from './create-game.dto';

export class UpdateGameDto extends PartialType(CreateGameDto) {


    id: number | null;
 
    name: string | null;

    censorship: string | null; 
    type: string | null;
  
    playerNumber: number |null

}
