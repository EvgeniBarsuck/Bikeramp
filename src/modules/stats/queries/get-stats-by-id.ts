import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

export class GetStatsQuery {
  id: string;
}

@QueryHandler(GetStatsQuery)
export class GetStatsByIdHandler implements IQueryHandler<GetStatsQuery> {
  constructor() {}

  async execute(query: GetStatsQuery) {
    return null;
  }
}
