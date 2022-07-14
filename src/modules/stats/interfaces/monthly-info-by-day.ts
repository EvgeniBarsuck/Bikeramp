import { ApiProperty } from '@nestjs/swagger';

export interface MonthlyInfoByDay {
  date: Date;
  totalDistance: number;
  totalPrice: number;
  totalTrips: number;
}

export class MonthlyInfoByDayDTO {
  @ApiProperty({
    example: '40km',
    name: 'total_distance',
    type: 'string',
  })
  total_distance: string;

  @ApiProperty({
    example: 'July, 5th',
    name: 'day',
    type: 'string',
  })
  day: string;

  @ApiProperty({
    example: '3km',
    name: 'avg_ride',
    type: 'string',
  })
  avg_ride: string;

  @ApiProperty({
    example: '15.50PLN',
    name: 'avg_price',
    type: 'string',
  })
  avg_price: string;
}
