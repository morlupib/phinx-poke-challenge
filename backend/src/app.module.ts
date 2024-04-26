import { BattleModule } from '@battle/battle.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from '@pokemon/pokemon.module';
import { dataSourceOptions } from './data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    PokemonModule,
    BattleModule,
  ],
})
export class AppModule {}
