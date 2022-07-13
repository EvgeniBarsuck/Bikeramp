import { GetCoordinatesByAddressResponseDTO } from './interfaces';
import { GetDistanceRequestDTO } from './interfaces/get-distance.request.dto';
import { GetDistanceResponseDTO } from './interfaces/get-distance.response.dto';

export abstract class Mapbox {
  abstract getCoordinatesByAddress(address: string): Promise<GetCoordinatesByAddressResponseDTO>;
  abstract getDistance(getDistanceRequestDTO: GetDistanceRequestDTO): Promise<GetDistanceResponseDTO>;
}
