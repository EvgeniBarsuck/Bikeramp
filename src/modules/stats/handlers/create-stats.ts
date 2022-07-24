import { config } from '@config/app/config';
import { formatPriceWithoutCurrencyName, parseDistance } from '@helpers';
import { HttpExceptionFactory } from '@libs/exceptions';
import { Mapbox } from '@libs/mapbox/src/mapbox.service.interface';
import { CreateStatsCommand } from '@modules/stats/commands';
import { StatsEntity } from '@modules/stats/entities';
import { DISTANCE_TYPE } from '@modules/types/distance';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@CommandHandler(CreateStatsCommand)
export class CreateStatsHandler implements ICommandHandler<CreateStatsCommand> {
  constructor(
    @InjectRepository(StatsEntity) private statsRepository: Repository<StatsEntity>,
    private readonly mapboxService: Mapbox,
  ) {}

  async execute({ createStats: { date, destination_address, price, start_address, type } }: CreateStatsCommand) {
    const mapConfig = config.mapApi;

    this.mapboxService.setParams(mapConfig.MAP_TOKEN, mapConfig.MAP_BASE_URL);

    const startCoordinatesDataPromises = this.mapboxService.getCoordinatesByAddress(start_address);
    const finishCoordinatesDataPromises = this.mapboxService.getCoordinatesByAddress(destination_address);

    try {
      const [startCoordinatesData, finishCoordinatesData] = await Promise.all([
        startCoordinatesDataPromises,
        finishCoordinatesDataPromises,
      ]);

      const [startLongitudeCoordinates, startLatitudeCoordinates] = startCoordinatesData.features[0].geometry.coordinates;
      const [finishLongitudeCoordinates, finishLatitudeCoordinates] = finishCoordinatesData.features[0].geometry.coordinates;

      const distanceResponseDTO = await this.mapboxService.getDistance({
        finishAddress: {
          latitude: finishLatitudeCoordinates,
          longitude: finishLongitudeCoordinates,
        },
        startAddress: {
          latitude: startLatitudeCoordinates,
          longitude: startLongitudeCoordinates,
        },
        type,
      });

      const distance: number = distanceResponseDTO.routes[0].legs[0].distance;

      const statsRecord = new StatsEntity({
        createdAt: new Date(date),
        totalDistance: parseDistance(distance, DISTANCE_TYPE.KM),
        totalPrice: formatPriceWithoutCurrencyName(price),
        updatedAt: new Date(date),
      });

      await this.statsRepository.save(statsRecord);

      return Promise.resolve(undefined);
    } catch (e) {
      throw HttpExceptionFactory.getException(e.status, e.message);
    }
  }
}
