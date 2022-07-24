export const mockStatsRepository = jest.fn().mockReturnValue({
  save: () => jest.fn().mockReturnValue(null),
});
