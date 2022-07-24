import { weeklyStatsCases, weeklyStatsErrorCases } from '@modules/stats/test/unit/query/stubs/get-weekly-stats/stats.repository';

export const mockStatsRepository = jest.fn().mockReturnValue({
  find: jest
    .fn()
    .mockResolvedValue(weeklyStatsCases.case_default)
    .mockResolvedValueOnce(weeklyStatsCases.case_1)
    .mockResolvedValueOnce(weeklyStatsCases.case_2)
    .mockResolvedValueOnce(weeklyStatsCases.case_3)
    .mockResolvedValueOnce(weeklyStatsCases.case_4)
    .mockResolvedValueOnce(weeklyStatsCases.case_5)
    .mockResolvedValueOnce(weeklyStatsCases.case_6)
    .mockResolvedValueOnce(weeklyStatsCases.case_7)
    .mockRejectedValueOnce(weeklyStatsErrorCases.case_1),
});
