import { StatsEventCreated } from '@modules/stats/events';
import { StatsEntity } from '@modules/stats/infrastructure/entities';
import { AggregateRoot } from '@nestjs/cqrs';

export class StatsModel extends AggregateRoot {
  constructor(private readonly stats: StatsEntity) {
    super();
  }

  createStats() {
    const stats = { ...this.stats };

    this.apply(new StatsEventCreated(stats));
  }
}
