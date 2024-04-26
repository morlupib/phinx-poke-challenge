import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

import * as pokemons from '../db/pokemon.json';

describe('PokemonController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/pokemon (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get('/pokemon')
      .expect(200);

    expect(response.body.length).toBe(pokemons.pokemon.length);
    expect(response.body).toEqual(expect.arrayContaining(pokemons.pokemon));
  });
});
