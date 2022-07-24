export const responseStubs = {
  case_1: {
    totalDistance: '0km',
    totalPrice: '0PLN',
  },
  case_2: [],
  case_3: undefined,
  case_4: undefined,
  case_5: undefined,
  case_6: {
    totalDistance: '5.8km',
    totalPrice: '75PLN',
  },
  case_7: [
    {
      avg_price: '45PLN',
      avg_ride: '3.3km',
      day: 'Jul, 01',
      total_distance: '3.3km',
    },
    {
      avg_price: '37.5PLN',
      avg_ride: '2.9km',
      day: 'Jul, 22',
      total_distance: '5.8km',
    },
  ],
  case_8: {
    statusCode: 400,
    message: [
      'start_address should not be empty',
      'start_address must be a string',
      'destination_address should not be empty',
      'destination_address must be a string',
      'price should not be empty',
      'price must be a string',
      'date should not be empty',
      'type should not be empty',
      'type must be a string',
    ],
    error: 'Bad Request',
  },
  case_9: {
    statusCode: 400,
    message: [
      'start_address should not be empty',
      'start_address must be a string',
      'destination_address must be a string',
      'price must be a string',
      'type should not be empty',
      'type must be a string',
    ],
    error: 'Bad Request',
  },
};
