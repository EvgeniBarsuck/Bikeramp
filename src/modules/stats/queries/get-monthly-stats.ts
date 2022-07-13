import { formatDistanceWithName, formatPriceWithCurrencyName, getLastDayOfMonth } from '@helpers';
import { StatsEntity } from '@modules/stats/entities';
import { MonthlyInfoByDay } from '@modules/stats/interfaces';
import { CURRENCY_TYPES, DISTANCE_TYPE } from '@modules/types';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';

export class GetMonthlyStatsQuery {}

@QueryHandler(GetMonthlyStatsQuery)
export class GetMonthlyStatsHandler implements IQueryHandler<GetMonthlyStatsQuery> {
  constructor(@InjectRepository(StatsEntity) private statsRepository: Repository<StatsEntity>) {}

  async execute() {
    const firstDayOfMonth = getLastDayOfMonth();

    const entities = await this.statsRepository.find({
      order: {
        createdAt: 'ASC',
      },
      where: {
        createdAt: Between(firstDayOfMonth, new Date()),
      },
    });

    const daylyStats = entities.reduce((acc, entity) => {
      const day = entity.createdAt.getDay();
      const daylyInfo = acc.get(day);

      if (!daylyInfo) {
        acc.set(day, {
          date: entity.createdAt,
          totalDistance: entity.totalDistance,
          totalPrice: entity.totalPrice,
          totalTrips: 1,
        });

        return acc;
      }

      const { totalDistance, totalPrice, totalTrips } = daylyInfo;

      const updatedDaylyInfo: MonthlyInfoByDay = {
        date: entity.createdAt,
        totalDistance: totalDistance + entity.totalDistance,
        totalPrice: totalPrice + entity.totalPrice,
        totalTrips: totalTrips + 1,
      };

      acc.set(day, updatedDaylyInfo);

      return acc;
    }, new Map<number, MonthlyInfoByDay>());

    const formatDailyStats = Array.from(daylyStats).map(([, info]) => {
      const { date, totalDistance, totalPrice, totalTrips } = info;
      const avgPrice = Number((totalPrice / totalTrips).toFixed(1));
      const avgRide = Number((totalDistance / totalTrips).toFixed(1));
      const distance = Number(totalDistance.toFixed(1));
      const [, month, day] = date.toDateString().split(' ');

      return {
        avg_price: formatPriceWithCurrencyName(avgPrice, CURRENCY_TYPES.PLN),
        avg_ride: formatDistanceWithName(avgRide, DISTANCE_TYPE.KM),
        day: `${month}, ${day}`,
        total_distance: formatDistanceWithName(distance, DISTANCE_TYPE.KM),
      };
    });

    return formatDailyStats;
  }
}
