import { UserRepository } from '@modules/user/infrastructure/repositories';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

export class GetAuctionQuery {
  id: string;
}

@QueryHandler(GetAuctionQuery)
export class GetAuctionHandler implements IQueryHandler<GetAuctionQuery> {
  constructor(private readonly repository: typeof UserRepository) {}

  async execute(query: GetAuctionQuery) {
    return this.repository.findOne({
      id: query.id,
    });
  }
}
