import { DISTANCE_TYPE } from '@modules/types/distance';

export const parseDistance = (distanse: number, distanceName: string) => {
  switch (distanceName) {
    case DISTANCE_TYPE.KM:
      return Number((distanse / 1000).toFixed(1));
    default:
      return distanse;
  }
};
