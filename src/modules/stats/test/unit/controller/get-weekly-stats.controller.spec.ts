import { GetWeeklyStatsController } from '@modules/stats/controllers';
import { WeeklyStats } from '@modules/stats/interfaces';
import { mockQueryBus } from '@modules/stats/test/unit/controller/__mocks__/get-weekly-stats/query-bus';
import { responseStubs } from '@modules/stats/test/unit/controller/stubs/get-weekly-stats/query.response';
import { QueryBus } from '@nestjs/cqrs';

describe('Unit testing for get weekly stats controller', () => {
  let _queryBus: QueryBus;
  let _controller: GetWeeklyStatsController;
  let _response: WeeklyStats;

  beforeAll(() => {
    _queryBus = mockQueryBus();
    _controller = new GetWeeklyStatsController(_queryBus);
  });

  describe('Testing positive cases', () => {
    beforeEach(async () => {
      _response = await _controller.getWeeklyStats();
    });

    it(`Case 1. Return value expected: ${responseStubs.case_1}`, () => {
      expect(_response).toEqual(responseStubs.case_1);
    });

    it(`Case 2. Return value expected: ${responseStubs.case_2}`, () => {
      expect(_response).toEqual(responseStubs.case_2);
    });

    it(`Case 2. Return value expected: ${responseStubs.case_default}`, () => {
      expect(_response).toEqual(responseStubs.case_default);
    });
  });
});
