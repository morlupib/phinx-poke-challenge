import { BattleResultRepository } from '@battle/battle.repository';
import { BattleDto } from '@battle/dtos/battle.dto';
import { BattleResult } from '@battle/entities/battle-result.entity';
import { Injectable } from '@nestjs/common';
import { Pokemon } from '@pokemon/entities/pokemon.entity';
import { PokemonService } from '@pokemon/pokemon.service';

@Injectable()
export class BattleService {
  constructor(
    private readonly pokemonService: PokemonService,
    private readonly battleResultRepository: BattleResultRepository,
  ) {}

  async startBattle(battleDto: BattleDto): Promise<BattleResult> {
    const [pokemon1, pokemon2] = await Promise.all([
      this.pokemonService.findById(battleDto.pokemon1Id),
      this.pokemonService.findById(battleDto.pokemon2Id),
    ]);

    let [attacker, defender] = this.determineFirstAttacker(pokemon1, pokemon2);

    while (attacker.hp > 0 && defender.hp > 0) {
      const damage = this.calculateDamage(attacker, defender);
      defender.hp -= damage;

      [attacker, defender] = [defender, attacker];
    }

    const [winnerId, loserId] =
      pokemon1.hp > pokemon2.hp
        ? [pokemon1.id, pokemon2.id]
        : [pokemon2.id, pokemon1.id];

    const battleResult = new BattleResult(winnerId, loserId);

    await this.battleResultRepository.save(battleResult);

    return battleResult;
  }

  private determineFirstAttacker(
    pokemon1: Pokemon,
    pokemon2: Pokemon,
  ): [Pokemon, Pokemon] {
    if (pokemon1.speed > pokemon2.speed) return [pokemon1, pokemon2];
    if (pokemon1.speed === pokemon2.speed)
      return pokemon1.attack > pokemon2.attack
        ? [pokemon1, pokemon2]
        : [pokemon2, pokemon1];
    return [pokemon2, pokemon1];
  }

  private calculateDamage(attacker: Pokemon, defender: Pokemon): number {
    return Math.max(attacker.attack - defender.defense, 1);
  }
}
