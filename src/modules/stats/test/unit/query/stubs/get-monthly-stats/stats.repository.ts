import { StatsEntity } from '@modules/stats/entities';
import { throwError } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

export const monthlyStatsStubs = (): StatsEntity[] => [
  new StatsEntity({
    createdAt: new Date('2022-07-01 11:44:26.012187'),
    id: new uuidv4('6561f1d1-3758-4ddd-8f20-af0b31b08d94'),
    totalDistance: 19,
    totalPrice: 103,
    updatedAt: new Date('2022-07-01 11:44:26.012187'),
  }),
  new StatsEntity({
    createdAt: new Date('2022-07-01 12:45:26.012187'),
    id: new uuidv4('5621f1d1-4528-3ddd-8f20-af0b31b08d94'),
    totalDistance: 32,
    totalPrice: 359,
    updatedAt: new Date('2022-07-01 12:45:26.012187'),
  }),
  new StatsEntity({
    createdAt: new Date('2022-07-15 19:31:26.012187'),
    id: new uuidv4('1351f1d1-4541-8dfr-8f20-af0b46b08d94'),
    totalDistance: 5,
    totalPrice: 20,
    updatedAt: new Date('2022-07-15 19:31:26.012187'),
  }),
  new StatsEntity({
    createdAt: new Date('2022-07-15 20:45:26.012187'),
    id: new uuidv4('1351f1d1-4523-8dfr-8f20-af0b31b08d94'),
    totalDistance: 45,
    totalPrice: 590,
    updatedAt: new Date('2022-07-15 20:45:26.012187'),
  }),
  new StatsEntity({
    createdAt: new Date('2022-07-19 21:26:26.012187'),
    id: new uuidv4('1351f1d1-4528-9dfr-8f20-af0b31b08d94'),
    totalDistance: 21,
    totalPrice: 150,
    updatedAt: new Date('2022-07-19 21:26:26.012187'),
  }),
  new StatsEntity({
    createdAt: new Date('2022-07-22 23:57:26.012187'),
    id: new uuidv4('1351f1d1-4554-3dfr-8f20-af0b31b08d94'),
    totalDistance: 54,
    totalPrice: 740,
    updatedAt: new Date('2022-07-22 23:57:26.012187'),
  }),
  new StatsEntity({
    createdAt: new Date('2022-07-23 23:57:26.012187'),
    id: new uuidv4('1351f1d1-4554-3dfr-8f20-af0b31b08d94'),
    totalDistance: 34,
    totalPrice: 630,
    updatedAt: new Date('2022-07-23 23:57:26.012187'),
  }),
];

const [stubValue_0, stubValue_1, stubValue_2, stubValue_3, stubValue_4, stubValue_5, stubValue_6] = monthlyStatsStubs();
const _monthlyStatsStubs = monthlyStatsStubs();

export const monthlyStatsCases = {
  case_1: [stubValue_0, stubValue_1, stubValue_4],
  case_2: [stubValue_1],
  case_3: [stubValue_3, stubValue_4],
  case_4: [stubValue_1, stubValue_5, stubValue_6],
  case_5: [stubValue_1, stubValue_2, stubValue_4, stubValue_6],
  case_6: _monthlyStatsStubs,
  case_7: [],
  case_default: [],
};

export const monthlyStatsErrorCases = {
  case_1: throwError(() => ({
    message: 'SInternal Server Error',
    status: 500,
  })),
};
