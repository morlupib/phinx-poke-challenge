import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from '@pokemon/entities/pokemon.entity';
import { PokemonController } from '@pokemon/pokemon.controller';
import { PokemonRepository } from '@pokemon/pokemon.repository';
import { PokemonService } from '@pokemon/pokemon.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon])],
  controllers: [PokemonController],
  providers: [PokemonService, PokemonRepository],
  exports: [PokemonService],
})
export class PokemonModule {}
