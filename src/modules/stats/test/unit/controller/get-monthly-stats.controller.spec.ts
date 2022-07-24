import { GetMouthlyStatsController } from '@modules/stats/controllers';
import { MonthlyInfoByDayDTO } from '@modules/stats/interfaces';
import { mockQueryBus } from '@modules/stats/test/unit/controller/__mocks__/get-monthly-stats/query-bus';
import { responseStubs } from '@modules/stats/test/unit/controller/stubs/get-monthly-stats/query.response';
import { QueryBus } from '@nestjs/cqrs';

describe('Unit testing for get monthly stats controller', () => {
  let _queryBus: QueryBus;
  let _controller: GetMouthlyStatsController;
  let _response: MonthlyInfoByDayDTO[];

  beforeAll(() => {
    _queryBus = mockQueryBus();
    _controller = new GetMouthlyStatsController(_queryBus);
  });

  describe('Testing positive cases', () => {
    beforeEach(async () => {
      _response = await _controller.getMonthlyStats();
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
