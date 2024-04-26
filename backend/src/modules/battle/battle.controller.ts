import { BattleService } from '@battle/battle.service';
import { BattleDto } from '@battle/dtos/battle.dto';
import { BattleResult } from '@battle/entities/battle-result.entity';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @Post()
  async startBattle(@Body() battleDto: BattleDto): Promise<BattleResult> {
    return this.battleService.startBattle(battleDto);
  }
}
