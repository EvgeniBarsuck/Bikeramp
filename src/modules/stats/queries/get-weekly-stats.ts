import { formatDistanceWithName, formatPriceWithCurrencyName, getLastMonday } from '@helpers';
import { HttpExceptionFactory } from '@libs/exceptions';
import { StatsEntity } from '@modules/stats/entities';
import { CURRENCY_TYPES } from '@modules/types/currency';
import { DISTANCE_TYPE } from '@modules/types/distance';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';

export class GetWeeklyStatsQuery {}

@QueryHandler(GetWeeklyStatsQuery)
export class GetWeeklyStatsHandler implements IQueryHandler<GetWeeklyStatsQuery> {
  constructor(@InjectRepository(StatsEntity) private statsRepository: Repository<StatsEntity>) {}

  async execute() {
    try {
      const lastMonday = getLastMonday();

      const entities = await this.statsRepository.find({
        where: {
          createdAt: Between(lastMonday, new Date()),
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

      const fixedDistance = Number(weeklyResult.totalDistance.toFixed(1));
      const fixedPrice = Number(weeklyResult.totalPrice.toFixed(1));
      const totalDistance = formatDistanceWithName(fixedDistance, DISTANCE_TYPE.KM);
      const totalPrice = formatPriceWithCurrencyName(fixedPrice, CURRENCY_TYPES.PLN);

      return { totalDistance, totalPrice };
    } catch (e) {
      throw HttpExceptionFactory.getException(e.status, e.message);
    }
  }
}
