import { ROUTING_PROFILE_TYPES } from '../types/routing-profile';

export interface GetDistanceRequestDTO {
  finishAddress: {
    latitude: number;
    longitude: number;
  };
  startAddress: {
    latitude: number;
    longitude: number;
  };
  type: ROUTING_PROFILE_TYPES;
}
