import { ROUTING_PROFILE, ROUTING_PROFILE_TYPES } from '@libs/mapbox/src/types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStats {
  @ApiProperty({
    example: 'Plac Europejski 2, Warszawa, Polska',
    name: 'startAddress',
    type: 'string',
  })
  startAddress: string;

  @ApiProperty({
    example: 'Marszałkowska 140, Warszawa,  Polska',
    name: 'destinationAddress',
    type: 'string',
  })
  destinationAddress: string;

  @ApiProperty({
    example: '45PLN',
    name: 'price',
    type: 'string',
  })
  price: string;

  @ApiProperty({
    example: 'mm-dd-yyyy',
    name: 'date',
    type: 'date',
  })
  date: Date;

  @ApiProperty({
    enum: ROUTING_PROFILE,
    example: 'walking',
    name: 'type',
    type: 'string',
  })
  type: ROUTING_PROFILE_TYPES;
}
