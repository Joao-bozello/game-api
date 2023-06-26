import { PartialType } from '@nestjs/mapped-types';
import { CreateMatchDto } from './create-match.dto';

export class UpdateMatchDto extends PartialType(CreateMatchDto) {  player1: number;

    player2: number;

    game: number;
    time: number;

    winner: number;}
