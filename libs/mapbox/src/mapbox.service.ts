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
  private accessToken: string;
  private baseUrl: string;

  public setParams(accessToken: string, baseUrl: string) {
    this.accessToken = accessToken;
    this.baseUrl = baseUrl;
  }

  constructor(private readonly httpService: HttpService) {
    super();
  }

  async getCoordinatesByAddress(address: string): Promise<GetCoordinatesByAddressResponseDTO> {
    try {
      const basePath = getPath(this.baseUrl, VERSION.V5, ROUTE.GEOCODING, DIRECTION.MAPBOX_PLACES);
      const fullPaht = `${basePath}${apiConfig.getGeocoding(address, this.accessToken)}`;
      const response = await lastValueFrom(this.httpService.get(fullPaht));

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
