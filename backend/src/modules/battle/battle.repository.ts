import { BattleResult } from '@battle/entities/battle-result.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

interface IBattleRepository {
  save(battle: BattleResult): Promise<BattleResult>;
}

@Injectable()
export class BattleResultRepository implements IBattleRepository {
  constructor(
    @InjectRepository(BattleResult)
    private battleRepository: Repository<BattleResult>,
  ) {}

  async save(battle: BattleResult): Promise<BattleResult> {
    return this.battleRepository.save(battle);
  }
}
