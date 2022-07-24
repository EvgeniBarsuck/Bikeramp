export const mockCommandBus = jest.fn().mockReturnValue({
  execute: jest.fn().mockReturnValue(null),
});
