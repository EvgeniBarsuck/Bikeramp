export interface GetCoordinatesByAddressResponseDTO {
  attribution: string;
  features: {
    address: string;
    center: [number, number];
    context: {
      id: string;
      short_code: string;
      text: string;
      wikidata: string;
    }[];
    geometry: {
      coordinates: [number, number];
      type: string;
    };
    id: string;
    matching_place_name: string;
    place_name: string;
    place_type: string[];
    properties: {
      accuracy: string;
    };
    relevance: number;
    text: string;
    type: string;
  }[];
  query: string[];
  type: string;
}
