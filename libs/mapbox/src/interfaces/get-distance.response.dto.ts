export interface GetDistanceResponseDTO {
  code: string;
  routes: [
    {
      country_crossed: boolean;
      distance: number;
      duration: number;
      geometry: {
        coordinates: [[number, number]];
        type: string;
      };
      legs: {
        admins: {
          iso_3166_1: string;
          iso_3166_1_alpha3: string;
        }[];
        distance: number;
        duration: number;
        summary: string;
        weight: number;
      }[];
      weight: number;
      weight_name: string;
    },
  ];
  uuid: string;
  waypoints: {
    distance: number;
    location: [number, number];
    name: string;
  }[];
}
