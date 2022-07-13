import { GetDistanceRequestDTO } from '../interfaces';

export const getPath = (baseUrl: string, version: string, routeType: string, mapbox: string) =>
  `${baseUrl}${routeType}${version}${mapbox}`;

export const apiConfig = {
  getDistance: ({ finishAddress, startAddress, type }: GetDistanceRequestDTO, accessToken: string) =>
    `/${type}/${startAddress.longitude},${startAddress.latitude};${finishAddress.longitude},${finishAddress.latitude}` +
    `?geometries=geojson&alternatives=false&access_token=${accessToken}`,
  getGeocoding: (address: string, name: string, accessToken: string): string =>
    `/${name}/${address}.json?access_token=${accessToken}`,
};
