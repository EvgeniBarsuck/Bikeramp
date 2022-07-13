import { api } from '@config/app/api';
import { CreateStatsCommand } from '@modules/stats/commands';
import { CreateStats } from '@modules/stats/interfaces';
import { Body, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common/decorators/core';
import { CommandBus } from '@nestjs/cqrs';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';

@ApiTags(api.trip.apiTag)
@Controller(api.base.basePath)
export class CreateStatsController {
  constructor(private commandBus: CommandBus) {}

  @ApiOperation({
    summary: 'Add trip',
  })
  @ApiOkResponse({
    description: 'Record about trip added successfully',
  })
  @Post(api.trip.createTrip)
  async createStats(@Body() stats: CreateStats): Promise<object> {
    const command = new CreateStatsCommand(stats);

    const result = await this.commandBus.execute(command);

    return result;
  }
}
