import { Pokemon } from '@pokemon/entities/pokemon.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
import * as pokemonData from '../pokemon.json';

export class NewMigration1714138443032 implements MigrationInterface {
  name = 'NewMigration1714138443032';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "battle_result" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "winnerId" varchar NOT NULL, "loserId" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `CREATE TABLE "pokemon" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "attack" integer NOT NULL, "defense" integer NOT NULL, "hp" integer NOT NULL, "speed" integer NOT NULL, "imageUrl" varchar NOT NULL)`,
    );
    for (const pokemon of pokemonData.pokemon) {
      await queryRunner.manager.save(Pokemon, pokemon);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "pokemon"`);
    await queryRunner.query(`DROP TABLE "battle_result"`);
  }
}
