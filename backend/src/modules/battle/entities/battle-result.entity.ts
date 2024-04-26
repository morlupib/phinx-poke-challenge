import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BattleResult {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  winnerId: string;

  @Column()
  loserId: string;

  constructor(winnerId: string, loserId: string) {
    this.winnerId = winnerId;
    this.loserId = loserId;
  }
}
