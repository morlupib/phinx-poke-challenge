import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from '@pokemon/entities/pokemon.entity';
import { Repository } from 'typeorm';

interface IPokemonRepository {
  findAll(): Promise<Pokemon[]>;
  findById(id: string): Promise<Pokemon | undefined>;
}

@Injectable()
export class PokemonRepository implements IPokemonRepository {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
  ) {}

  async findAll(): Promise<Pokemon[]> {
    return this.pokemonRepository.find();
  }

  async findById(id: string): Promise<Pokemon | undefined> {
    return this.pokemonRepository.findOne({ where: { id } });
  }
}
