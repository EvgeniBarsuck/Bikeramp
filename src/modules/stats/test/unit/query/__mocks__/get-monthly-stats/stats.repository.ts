import { monthlyStatsCases, monthlyStatsErrorCases } from '@modules/stats/test/unit/query/stubs/get-monthly-stats';

export const mockStatsRepository = jest.fn().mockReturnValue({
  find: jest
    .fn()
    .mockResolvedValue(monthlyStatsCases.case_default)
    .mockResolvedValueOnce(monthlyStatsCases.case_1)
    .mockResolvedValueOnce(monthlyStatsCases.case_2)
    .mockResolvedValueOnce(monthlyStatsCases.case_3)
    .mockResolvedValueOnce(monthlyStatsCases.case_4)
    .mockResolvedValueOnce(monthlyStatsCases.case_5)
    .mockResolvedValueOnce(monthlyStatsCases.case_6)
    .mockResolvedValueOnce(monthlyStatsCases.case_7)
    .mockRejectedValueOnce(monthlyStatsErrorCases.case_1),
});
