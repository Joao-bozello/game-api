import { MigrationInterface, QueryRunner } from "typeorm"

export class Player1687202041383 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE player MODIFY COLUMN email varchar(100)`); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
