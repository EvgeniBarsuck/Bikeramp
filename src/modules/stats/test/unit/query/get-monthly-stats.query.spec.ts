import { StatsEntity } from '@modules/stats/entities';
import { MonthlyInfoByDayDTO } from '@modules/stats/interfaces';
import { GetMonthlyStatsHandler } from '@modules/stats/queries';
import { mockStatsRepository } from '@modules/stats/test/unit/query/__mocks__/get-monthly-stats';
import { errorResponseStubs, responseStubs } from '@modules/stats/test/unit/query/stubs/get-monthly-stats';
import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';

describe('Unit testing for monthly stats query', () => {
  let _statsRepository: Repository<StatsEntity>;
  let _getMonthlyStatsHandler: GetMonthlyStatsHandler;
  let _response: MonthlyInfoByDayDTO[];

  beforeAll(async () => {
    _statsRepository = mockStatsRepository();
    _getMonthlyStatsHandler = new GetMonthlyStatsHandler(_statsRepository);
  });

  describe('Testing positive cases', () => {
    beforeEach(async () => {
      _response = await _getMonthlyStatsHandler.execute();
    });

    it(`Case 1. Return value expected: ${JSON.stringify(responseStubs.case_1)}`, () => {
      expect(_response).toEqual(responseStubs.case_1);
    });

    it(`Case 2. Return value expected: ${JSON.stringify(responseStubs.case_2)}`, () => {
      expect(_response).toEqual(responseStubs.case_2);
    });

    it(`Case 3. Return value expected: ${JSON.stringify(responseStubs.case_3)}`, () => {
      expect(_response).toEqual(responseStubs.case_3);
    });

    it(`Case 4. Return value expected: ${JSON.stringify(responseStubs.case_4)}`, () => {
      expect(_response).toEqual(responseStubs.case_4);
    });

    it(`Case 5. Return value expected: ${JSON.stringify(responseStubs.case_5)}`, () => {
      expect(_response).toEqual(responseStubs.case_5);
    });

    it(`Case 6. Return value expected: ${JSON.stringify(responseStubs.case_6)}`, () => {
      expect(_response).toEqual(responseStubs.case_6);
    });

    it(`Case 7. Return value expected: ${JSON.stringify(responseStubs.case_7)}`, () => {
      expect(_response).toEqual(responseStubs.case_7);
    });
  });

  describe('Testing negative cases', () => {
    it(`Case 1. Return value expected: ${JSON.stringify(errorResponseStubs.case_1)}`, async () => {
      try {
        _response = await _getMonthlyStatsHandler.execute();
        expect('No error found').toBe('An error was expected');
      } catch (e) {
        expect(e).toBeInstanceOf(HttpException);
        expect(e.response).toEqual({ message: 'Internal Server Error', statusCode: 500 });
      }
    });
  });
});
