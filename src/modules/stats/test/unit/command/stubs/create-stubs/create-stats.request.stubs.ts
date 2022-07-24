export const createStatsRequest = jest.fn().mockReturnValue({
  createStats: {
    date: '07-22-2022',
    destination_address: 'Marszałkowska 140, Warszawa,  Polska',
    price: '45PLN',
    start_address: 'Plac Europejski 2, Warszawa, Polska',
    type: 'walking',
  },
});
