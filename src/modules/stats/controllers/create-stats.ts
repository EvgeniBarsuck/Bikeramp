import { StatsEventCreated } from '@modules/stats/events';
import { GetAuctionQuery } from '@modules/user/queries';
import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common/decorators/core';
import { EventBus, QueryBus } from '@nestjs/cqrs';

@Controller()
export class CreateStatsController {
  constructor(private readonly eventBus: EventBus, private queryBus: QueryBus) {}

  @Get()
  async createStats(): Promise<object> {
    // We are hard-coding values here
    // instead of collecting them from a request
    this.eventBus.publish(
      new StatsEventCreated('4ccd1088-b5da-44e2-baa0-ee4e0a58659d', '0ac04f2a-4866-42de-9387-cf392f64cd52', 233),
    );

    return {
      status: 'PENDING',
    };
  }

  @Get('/audiences')
  async getAudiences() {
    const allAudiences = await this.queryBus.execute(new GetAuctionQuery());

    return allAudiences;
  }
}
