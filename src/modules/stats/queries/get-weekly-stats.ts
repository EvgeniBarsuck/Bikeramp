import { formatDistanceWithName, formatPriceWithCurrencyName } from '@helpers';
import { StatsEntity } from '@modules/stats/entities';
import { CURRENCY_TYPES } from '@modules/types/currency';
import { DISTANCE_TYPE } from '@modules/types/distance';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { getLastMonday } from 'src/helpers/get-last-monday';
import { MoreThan, Repository } from 'typeorm';

export class GetWeeklyStatsQuery {}

@QueryHandler(GetWeeklyStatsQuery)
export class GetWeeklyStatsHandler implements IQueryHandler<GetWeeklyStatsQuery> {
  constructor(@InjectRepository(StatsEntity) private statsRepository: Repository<StatsEntity>) {}

  async execute() {
    const lastMonday = getLastMonday();

    const entities = await this.statsRepository.find({
      where: {
        createdAt: MoreThan(lastMonday),
      },
    });

    const weeklyResult = entities.reduce(
      (acc, entity) => {
        acc.totalDistance = acc.totalDistance + entity.totalDistance;
        acc.totalPrice = acc.totalPrice + entity.totalPrice;

        return acc;
      },
      { totalDistance: 0, totalPrice: 0 },
    );

    const totalDistance = formatDistanceWithName(weeklyResult.totalDistance, DISTANCE_TYPE.KM);
    const totalPrice = formatPriceWithCurrencyName(weeklyResult.totalPrice, CURRENCY_TYPES.PLN);

    return { totalDistance, totalPrice };
  }
}
