import { responseStubs } from '@modules/stats/test/unit/controller/stubs/get-weekly-stats/query.response';

export const mockQueryBus = jest.fn().mockReturnValue({
  execute: jest
    .fn()
    .mockReturnValue(responseStubs.case_default)
    .mockReturnValueOnce(responseStubs.case_1)
    .mockReturnValueOnce(responseStubs.case_2),
});
