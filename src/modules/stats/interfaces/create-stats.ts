import { ROUTING_PROFILE, ROUTING_PROFILE_TYPES } from '@libs/mapbox/src/types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStats {
  @ApiProperty({
    example: 'Plac Europejski 2, Warszawa, Polska',
    name: 'start_address',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  start_address: string;

  @ApiProperty({
    example: 'Marszałkowska 140, Warszawa,  Polska',
    name: 'destination_address',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  destination_address: string;

  @ApiProperty({
    example: '45PLN',
    name: 'price',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  price: string;

  @ApiProperty({
    example: 'mm-dd-yyyy',
    name: 'date',
    type: 'date',
  })
  @IsNotEmpty()
  date: Date;

  @ApiProperty({
    enum: ROUTING_PROFILE,
    example: 'walking',
    name: 'type',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  type: ROUTING_PROFILE_TYPES;
}
