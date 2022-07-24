export const mockMapboxService = jest.fn().mockReturnValue({
  getCoordinatesByAddress: jest
    .fn()
    .mockReturnValue({ features: [{ geometry: { coordinates: [0, 0] } }] })
    .mockReturnValueOnce({ features: [{ geometry: { coordinates: [-51, -71] } }] })
    .mockReturnValue({ features: [{ geometry: { coordinates: [-50, -70] } }] }),
  getDistance: jest
    .fn()
    .mockReturnValue({ routes: [{ legs: [{ distance: 0 }] }] })
    .mockReturnValueOnce({ routes: [{ legs: [{ distance: 7.3 }] }] })
    .mockReturnValueOnce({ routes: [{ legs: [{ distance: 7.3 }] }] }),
  setParams: () => jest.fn().mockReturnValue(null),
});
