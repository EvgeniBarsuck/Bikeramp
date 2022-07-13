import { api } from '@config/app/api';
import { WeeklyStats } from '@modules/stats/interfaces';
import { GetWeeklyStatsQuery } from '@modules/stats/queries';
import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';

@ApiTags(api.trip.apiTag)
@Controller(api.base.basePath)
export class GetWeeklyStatsController {
  constructor(private queryBus: QueryBus) {}

  @ApiOperation({
    summary: 'Get weekly stats',
  })
  @ApiOkResponse({
    description: 'Weekly loaded successfully',
    type: WeeklyStats,
  })
  @Get(api.stats.getWeeklyStats)
  async getWeeklyStats(): Promise<WeeklyStats> {
    const query = new GetWeeklyStatsQuery();

    const result = await this.queryBus.execute(query);

    return result;
  }
}
