import { BattleResult } from '@battle/entities/battle-result.entity';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('BattleController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/battle (POST)', async () => {
    const payload = {
      pokemon1Id: 'pokemon-1',
      pokemon2Id: 'pokemon-2',
    };
    const response = await request(app.getHttpServer())
      .post('/battle')
      .send(payload);

    expect(response.status).toBe(201);

    const result = response.body as BattleResult;

    expect(result.id).toBeDefined();
    expect(result.winnerId).toBeDefined();
    expect(result.winnerId).toBe(payload.pokemon1Id);
    expect(result.loserId).toBeDefined();
    expect(result.loserId).toBe(payload.pokemon2Id);
  });
});
