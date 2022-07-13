import { ApiProperty } from '@nestjs/swagger';

export class WeeklyStats {
  @ApiProperty({
    example: '40km',
    name: 'total_distance',
    type: 'string',
  })
  totalDistance: string;

  @ApiProperty({
    example: '49.75PLN',
    name: 'total_price',
    type: 'string',
  })
  totalPrice: string;
}
