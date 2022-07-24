import { StatsEntity } from '@modules/stats/entities';
import { throwError } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

export const weeklyStatsStubs = (): StatsEntity[] => [
  new StatsEntity({
    createdAt: new Date('2022-07-23 11:44:26.012187'),
    id: new uuidv4('6561f1d1-3758-3ddd-8f20-af0b31b08d94'),
    totalDistance: 14,
    totalPrice: 90,
    updatedAt: new Date('2022-07-23 11:44:26.012187'),
  }),
  new StatsEntity({
    createdAt: new Date('2022-07-23 12:45:26.012187'),
    id: new uuidv4('5621f1d1-4528-3ddd-8f20-af0b31b08d94'),
    totalDistance: 7,
    totalPrice: 45,
    updatedAt: new Date('2022-07-23 12:45:26.012187'),
  }),
  new StatsEntity({
    createdAt: new Date('2022-07-23 17:26:26.012187'),
    id: new uuidv4('1351f1d1-4528-8dfr-8f20-af0b31b08d94'),
    totalDistance: 20,
    totalPrice: 120,
    updatedAt: new Date('2022-07-23 17:26:26.012187'),
  }),
];

const [stubValue_0, stubValue_1, stubValue_2] = weeklyStatsStubs();
const _weeklyStatsStubs = weeklyStatsStubs();

export const weeklyStatsCases = {
  case_1: [stubValue_0],
  case_2: [stubValue_1],
  case_3: [stubValue_2],
  case_4: [stubValue_0, stubValue_1],
  case_5: [stubValue_1, stubValue_2],
  case_6: _weeklyStatsStubs,
  case_7: [],
  case_default: [],
};

export const weeklyStatsErrorCases = {
  case_1: throwError(() => ({
    message: 'Internal Server Error',
    status: 500,
  })),
};
