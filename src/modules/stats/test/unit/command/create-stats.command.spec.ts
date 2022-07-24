import { Mapbox } from '@libs/mapbox/src/mapbox.service.interface';
import { StatsEntity } from '@modules/stats/entities';
import { CreateStatsHandler } from '@modules/stats/handlers';
import { mockMapboxService, mockStatsRepository } from '@modules/stats/test/unit/command/__mocks__/create-stats';
import { createStatsRequest } from '@modules/stats/test/unit/command/stubs/create-stubs/create-stats.request.stubs';
import { Repository } from 'typeorm';

describe('Unit testing for create stats handler', () => {
  let _handler: CreateStatsHandler;
  let _mapbox: Mapbox;
  let _statsRepository: Repository<StatsEntity>;
  let _response: Promise<undefined>;

  beforeAll(() => {
    _mapbox = mockMapboxService();
    _statsRepository = mockStatsRepository();
    _handler = new CreateStatsHandler(_statsRepository, _mapbox);
  });

  describe('Testing positive cases', () => {
    beforeEach(async () => {
      _response = await _handler.execute(createStatsRequest());
    });

    it('Case 1. Create default stats', () => {
      expect(_response).toBeUndefined();
    });
  });
});
