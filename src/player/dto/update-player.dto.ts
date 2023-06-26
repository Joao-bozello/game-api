import { PartialType } from '@nestjs/mapped-types';
import { CreatePlayerDto } from './create-player.dto';

export class UpdatePlayerDto extends PartialType(CreatePlayerDto) {
    id: number | null;

    nickname: string| null;

    email: string| null;

    password: string| null;
  
    birthday: string| null;
    
 
    name: string | null;
}
