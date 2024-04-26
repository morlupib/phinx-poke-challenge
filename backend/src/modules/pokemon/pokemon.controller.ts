import { Controller, Get } from '@nestjs/common';
import { Pokemon } from '@pokemon/entities/pokemon.entity';
import { PokemonService } from '@pokemon/pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async findAll(): Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }
}
