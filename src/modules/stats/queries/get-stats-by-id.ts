import { StatsRepository } from '@modules/stats/infrastructure/repositories';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

export class GetStatsQuery {
  id: string;
}

@QueryHandler(GetStatsQuery)
export class GetStatsByIdHandler implements IQueryHandler<GetStatsQuery> {
  constructor(private readonly repository: typeof StatsRepository) {}

  async execute(query: GetStatsQuery) {
    return this.repository.findOne({
      id: query.id,
    });
  }
}
