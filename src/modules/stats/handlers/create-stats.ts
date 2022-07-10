import { CreateStatsCommand } from '@modules/stats/commands';
import { StatsRepository } from '@modules/stats/infrastructure/repositories';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateStatsCommand)
export class CreateStatsHandler implements ICommandHandler<CreateStatsCommand> {
  constructor(private readonly statsRepository: typeof StatsRepository, private readonly publisher: EventPublisher) {}

  async execute(command: CreateStatsCommand) {}
}
