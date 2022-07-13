import { GetCoordinatesByAddressResponseDTO } from './interfaces';
import { GetDistanceRequestDTO } from './interfaces/get-distance.request.dto';
import { GetDistanceResponseDTO } from './interfaces/get-distance.response.dto';

export abstract class Mapbox {
  abstract setParams(accessToken: string, baseUrl: string): void;
  abstract getCoordinatesByAddress(address: string): Promise<GetCoordinatesByAddressResponseDTO>;
  abstract getDistance(getDistanceRequestDTO: GetDistanceRequestDTO): Promise<GetDistanceResponseDTO>;
}
