import { HttpExceptionFactory } from '@libs/exceptions';
import { UnauthorizedError } from '@libs/exceptions/unauthorized.error';
import { HttpService } from '@nestjs/axios';
import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

import { apiConfig, getPath } from './config';
import { GetCoordinatesByAddressResponseDTO, GetDistanceRequestDTO, GetDistanceResponseDTO } from './interfaces';
import { Mapbox } from './mapbox.service.interface';
import { DIRECTION, ROUTE, VERSION } from './types';

@Injectable()
export class MapboxService extends Mapbox {
  private readonly accessToken: string;
  private readonly baseUrl: string;

  constructor(private readonly httpService: HttpService, accessToken: string, baseUrl: string) {
    super();
    this.accessToken = accessToken;
    this.baseUrl = baseUrl;
  }

  async getCoordinatesByAddress(address: string): Promise<GetCoordinatesByAddressResponseDTO> {
    try {
      const path = getPath(this.baseUrl, VERSION.V5, ROUTE.GEOCODING, DIRECTION.MAPBOX_PLACES);

      const response = await lastValueFrom(
        this.httpService.get(`${path}${apiConfig.getGeocoding(address, DIRECTION.MAPBOX_PLACES, this.accessToken)}`),
      );

      return response.data;
    } catch (e) {
      if ((e as Record<string, any>).response?.status === HttpStatus.UNAUTHORIZED) {
        throw new UnauthorizedException(UnauthorizedError.message);
      }

      const err = e as Record<string, any>;

      throw HttpExceptionFactory.getException(err.response?.status || err.response?.code, err.response?.statusText);
    }
  }

  async getDistance(getDistanceRequestDTO: GetDistanceRequestDTO): Promise<GetDistanceResponseDTO> {
    try {
      const path = getPath(this.baseUrl, VERSION.V5, ROUTE.DIRECTIONS, DIRECTION.MAPBOX);

      const response = await lastValueFrom(
        this.httpService.get(`${path}${apiConfig.getDistance(getDistanceRequestDTO, this.accessToken)}`),
      );

      return response.data;
    } catch (e) {
      if ((e as Record<string, any>).response?.status === HttpStatus.UNAUTHORIZED) {
        throw new UnauthorizedException(UnauthorizedError.message);
      }

      const err = e as Record<string, any>;

      throw HttpExceptionFactory.getException(err.response?.status || err.response?.code, err.response?.statusText);
    }
  }
}
