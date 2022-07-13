import { api } from '@config/app/api';
import { MonthlyInfoByDayDTO } from '@modules/stats/interfaces';
import { GetMonthlyStatsQuery } from '@modules/stats/queries';
import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';

@ApiTags(api.trip.apiTag)
@Controller(api.base.basePath)
export class GetMouthlyStatsController {
  constructor(private queryBus: QueryBus) {}

  @ApiOperation({
    summary: 'Get mouthly stats',
  })
  @ApiOkResponse({
    description: 'Mouthly loaded successfully',
    isArray: true,
    type: MonthlyInfoByDayDTO,
  })
  @Get(api.stats.getMouthlyStats)
  async getMonthlyStats(): Promise<MonthlyInfoByDayDTO[]> {
    const query = new GetMonthlyStatsQuery();

    const result = await this.queryBus.execute(query);

    return result;
  }
}
