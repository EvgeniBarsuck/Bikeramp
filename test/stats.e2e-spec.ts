import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import MockDate from 'mockdate';
import * as request from 'supertest';

import { AppModule } from './../src/app.module';
import { api } from '../src/config/app';
import { requestStubs } from './stubs/stats/request';
import { responseStubs } from './stubs/stats/response';

const TEST_DATE = '7/24/2022 23:59';

describe('e2e testing for stats module', () => {
  let app: INestApplication;

  beforeAll(async () => {
    MockDate.set(new Date(TEST_DATE));

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());

    await app.init();
  });

  afterAll(async () => {
    MockDate.reset();

    await Promise.all([app.close()]);
  });

  describe('Check for default values', () => {
    it(`${api.base.basePath}/${api.stats.getWeeklyStats} (GET)`, async () => {
      await request(app.getHttpServer())
        .get(`${api.base.basePath}/${api.stats.getWeeklyStats}`)
        .expect(HttpStatus.OK)
        .expect(responseStubs.case_1);
    });

    it(`${api.base.basePath}/${api.stats.getMouthlyStats} (GET)`, async () => {
      await request(app.getHttpServer())
        .get(`${api.base.basePath}/${api.stats.getMouthlyStats}`)
        .expect(HttpStatus.OK)
        .expect(responseStubs.case_2);
    });
  });

  describe('Create simple stats value', () => {
    it(`${api.base.basePath}/${api.trip.createTrip} (POST)`, async () => {
      await request(app.getHttpServer())
        .post(`${api.base.basePath}/${api.trip.createTrip}`)
        .send(requestStubs.case_3)
        .expect(HttpStatus.CREATED);
    });

    it(`${api.base.basePath}/${api.trip.createTrip} (POST)`, async () => {
      await request(app.getHttpServer())
        .post(`${api.base.basePath}/${api.trip.createTrip}`)
        .send(requestStubs.case_4)
        .expect(HttpStatus.CREATED);
    });

    it(`${api.base.basePath}/${api.trip.createTrip} (POST)`, async () => {
      await request(app.getHttpServer())
        .post(`${api.base.basePath}/${api.trip.createTrip}`)
        .send(requestStubs.case_5)
        .expect(HttpStatus.CREATED);
    });
  });

  describe('Check for simple values', () => {
    it(`${api.base.basePath}/${api.stats.getWeeklyStats} (GET)`, async () => {
      await request(app.getHttpServer())
        .get(`${api.base.basePath}/${api.stats.getWeeklyStats}`)
        .expect(HttpStatus.OK)
        .expect(responseStubs.case_6);
    });

    it(`${api.base.basePath}/${api.stats.getMouthlyStats} (GET)`, async () => {
      await request(app.getHttpServer())
        .get(`${api.base.basePath}/${api.stats.getMouthlyStats}`)
        .expect(HttpStatus.OK)
        .expect(responseStubs.case_7);
    });
  });

  describe('Check validator', () => {
    it(`${api.base.basePath}/${api.trip.createTrip} (POST)`, async () => {
      await request(app.getHttpServer())
        .post(`${api.base.basePath}/${api.trip.createTrip}`)
        .send(requestStubs.case_8)
        .expect(HttpStatus.BAD_REQUEST)
        .expect(responseStubs.case_8);
    });

    it(`${api.base.basePath}/${api.trip.createTrip} (POST)`, async () => {
      await request(app.getHttpServer())
        .post(`${api.base.basePath}/${api.trip.createTrip}`)
        .send(requestStubs.case_9)
        .expect(HttpStatus.BAD_REQUEST)
        .expect(responseStubs.case_9);
    });
  });
});
