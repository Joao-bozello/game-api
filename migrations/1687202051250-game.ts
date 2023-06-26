import { MigrationInterface, QueryRunner } from "typeorm"

export class Game1687202051250 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE game MODIFY COLUMN name varchar(100)`); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
