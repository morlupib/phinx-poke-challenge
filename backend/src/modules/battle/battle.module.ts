import { BattleController } from '@battle/battle.controller';
import { BattleResultRepository } from '@battle/battle.repository';
import { BattleService } from '@battle/battle.service';
import { BattleResult } from '@battle/entities/battle-result.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from '@pokemon/pokemon.module';

@Module({
  imports: [TypeOrmModule.forFeature([BattleResult]), PokemonModule],
  controllers: [BattleController],
  providers: [BattleService, BattleResultRepository],
})
export class BattleModule {}
