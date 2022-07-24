import { CreateStatsController } from '@modules/stats/controllers';
import { mockCommandBus } from '@modules/stats/test/unit/controller/__mocks__/create-stats/command-bus';
import { createStatsRequest } from '@modules/stats/test/unit/controller/stubs/create-stats/create-stats.request.stubs';
import { CommandBus } from '@nestjs/cqrs';

describe('Unit testing for create stats controller', () => {
  let _commandBus: CommandBus;
  let _controller: CreateStatsController;
  let _response: void;

  beforeAll(() => {
    _commandBus = mockCommandBus();
    _controller = new CreateStatsController(_commandBus);
  });

  describe('Testing positive cases', () => {
    beforeEach(async () => {
      _response = await _controller.createStats(createStatsRequest());
    });

    it('Case 1. Create with default params', () => {
      expect(_response).toBeUndefined();
    });
  });
});
